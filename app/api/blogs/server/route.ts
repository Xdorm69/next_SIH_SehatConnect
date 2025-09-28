import { NextRequest, NextResponse } from "next/server";
import { getAdmin } from "@/lib/helpers/auth";
import { prisma } from "@/lib/db";

export async function GET(req: NextRequest) {
  const admin = await getAdmin();

  if (!admin.success)
    return NextResponse.json(
      { success: false, message: admin.message },
      { status: 401 }
    );

      const { searchParams } = new URL(req.url);
      const page = Number(searchParams.get("page")) || 1;
      const pageSize = Number(searchParams.get("pageSize")) || 6;

  try {
    const [all, popular, count] = await prisma.$transaction([
      prisma.blogs.findMany({}),
      prisma.blogs.findMany({ where: { popular: true } }),
      prisma.blogs.count({}),
    ]);

    return NextResponse.json({
      success: true,
      message: "Blogs fetched successfully",
      all,
      popular,
      count,
      totalPages: Math.ceil(count / pageSize),
    });

  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
