import { getAdmin } from "@/lib/helpers/auth";
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const admin = await getAdmin();
  if (!admin.success)
    return NextResponse.json({
      success: false,
      message: "Unauthorized",
      users: [],
    });
  try {
    const users = await prisma.user.findMany({
      where: { id: { not: admin.admin?.id } },
    });
    return NextResponse.json({ success: true, message: "Success", users });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      message: "Failed to fetch users",
      users: [],
    });
  }
}
