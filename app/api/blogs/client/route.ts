import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || 6;

  try {
    const [all, popular, count] = await prisma.$transaction([
      prisma.blogs.findMany({
        where: { description: { not: null } },
        skip: (page - 1) * pageSize,
        take: pageSize,
      }),
      prisma.blogs.findMany({ where: { popular: true } }),
      prisma.blogs.count({ where: { description: { not: null } } }),
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
