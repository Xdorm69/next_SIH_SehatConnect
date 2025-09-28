import NextAuth, { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      role: string;
      phone: string;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string;
    username: string;
    role: string;
    phone: string;
  }
}

// ⬇️ separate augmentation for JWT
declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    username: string;
    role: string;
    phone: string;
  }
}
