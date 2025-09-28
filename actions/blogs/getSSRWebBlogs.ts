import { prisma } from "@/lib/db";

export async function getSSRWebBlogs(page: number = 1, pageSize: number = 6) {
    try {
        const [all, popular, count] = await prisma.$transaction([
          prisma.blogs.findMany({
            where: {description: {not: null}},
            skip: (page - 1) * pageSize,
            take: pageSize,
          }),
          prisma.blogs.findMany({ where: { popular: true }, orderBy: {createdAt: "desc"} }),
          prisma.blogs.count({where: {description: {not: null}}}),
        ]);
    
        return {
          success: true,
          message: "Blogs fetched successfully",
          all,
          popular,
          count,
          totalPages: Math.ceil(count / pageSize),
        };
    
      } catch (error) {
        return { success: false, message: "Failed to fetch blogs" };
      }
}