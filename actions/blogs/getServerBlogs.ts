import { prisma } from "@/lib/db";

export const getServerBlogs = async () => {
  try {
    const [all, popular, count] = await prisma.$transaction([
      prisma.blogs.findMany({
        orderBy: { createdAt: "desc" },
      }),
      prisma.blogs.findMany({
        where: { popular: true },
        orderBy: { createdAt: "desc" },
      }),
      prisma.blogs.count({}),
    ]);

    return {
      success: true,
      message: "Blogs fetched successfully",
      all,
      popular,
      count,
    };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return {
      success: false,
      message: "Failed to fetch blogs",
      all: [],
      popular: [],
      count: [],
    };
  }
};
