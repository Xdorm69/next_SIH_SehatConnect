import NextAuth, { NextAuthOptions, User as NextAuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import { prisma } from "@/lib/db";
import { UserRoles } from "@prisma/client"; // Import your Prisma types

// Define a custom type to include your extra fields
interface CustomUser extends NextAuthUser {
  role: UserRoles;
  username: string;
  phone: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    // Email + password
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });
        if (!user) {
          throw new Error("No account found with this email");
        }

        // NOTE: We only check password if the user was created via credentials
        if (user.provider !== "credentials" || !user.password) {
          throw new Error(
            "User signed up with Google. Please use Google login."
          );
        }

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) {
          throw new Error("Incorrect password");
        }

        // Return the user object with all custom fields
        return {
          id: user.id,
          name: user.username,
          phone: user.phone,
          email: user.email,
          role: user.role,
          username: user.username,
        } as CustomUser; // Cast to CustomUser for type safety
      },
    }),

    // Google login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        // Handle custom fields from Credentials Provider or existing user fetch
        const customUser = user as CustomUser;
        token.id = customUser.id;
        token.role = customUser.role || "USER";
        token.username = customUser.username || customUser.name || "";
        token.phone = customUser.phone || "";

        // Google signup/signin handling
        if (account?.provider === "google") {
          const existing = await prisma.user.findUnique({
            where: { email: user.email! },
          });

          if (!existing) {
            // New Google User: Create user in the database
            const newUser = await prisma.user.create({
              data: {
                username: user.name || "GoogleUser",
                email: user.email!,
                // FIX: Since Google doesn't provide phone, we must provide
                // a unique placeholder because 'phone' is unique in schema.
                // It's highly recommended to make 'phone' nullable or
                // require the user to set it after first login.
                phone: `GGL-${Date.now()}`,
                provider: "google",
                role: "USER",
              },
            });
            token.id = newUser.id;
            token.role = newUser.role;
            token.username = newUser.username;
            token.phone = newUser.phone;
          } else {
            // Existing User: Update token with database values
            token.id = existing.id;
            token.role = existing.role;
            token.username = existing.username;
            token.phone = existing.phone;
          }
        }
      }
      return token;
    },

    async session({ session, token }) {
      if (token && session.user) {
        // Add custom fields to the session object
        session.user.id = token.id as string;
        session.user.role = token.role as UserRoles;
        session.user.username = token.username as string;
        // FIX: Add phone to session
        session.user.phone = token.phone as string;
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
