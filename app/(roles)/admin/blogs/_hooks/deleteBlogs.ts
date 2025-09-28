"use server"

import { getAdmin } from "@/lib/helpers/auth";
import { Blogs } from "@prisma/client";
import { prisma } from "@/lib/db";

export async function deleteBlogs(data: Blogs[]) {
  const admin = await getAdmin();
  if(!admin.success) throw new Error("Unauthorized");

  try {
    const deleted = await prisma.blogs.deleteMany({
      where: {
        id: {
          in: data.map((d) => d.id),
        },
      },
    });
    return deleted;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to delete blogs");
  }
}
