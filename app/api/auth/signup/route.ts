import { prisma } from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const body = await req.json();
  console.log(body);
  try {
    const { username, email, password, phone } = body;

    if (!username || !email || !password || !phone) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });
    }

    const existing = await prisma.user.findUnique({ where: { email } });
    if (existing) {
      return new Response(JSON.stringify({ error: "User already exists" }), {
        status: 400,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        phone,
        provider: "credentials",
        role: "USER",
      },
    });

    return new Response(JSON.stringify({ user }), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Invalid request" }), {
      status: 400,
    });
  }
}
