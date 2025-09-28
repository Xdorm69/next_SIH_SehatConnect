"use server";

import { getAdmin } from "@/lib/helpers/auth";
import { prisma } from "@/lib/db";
import { blogSchema } from "../add/_components/BlogForm";
import z from "zod";

export async function updateBlog(id: string, data: z.infer<typeof blogSchema>) {
  if (!id) throw new Error("Invalid ID");
  const admin = await getAdmin();
  if (!admin.success) throw new Error("Unauthorized");

  try {
    const countPopularBlogs = await prisma.blogs.count({
      where: { popular: true },
    });

    if (countPopularBlogs >= 4 && data.popular)
      throw new Error("Only 4 popular blogs are allowed");
    const updated = await prisma.blogs.update({
      where: {
        id,
      },
      data: {
        img: data.img,
        title: data.title,
        popular: data.popular,
        description: data.description,
        createdBy: admin.admin?.id,
      },
    });
    return updated;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to update blog");
  }
}
