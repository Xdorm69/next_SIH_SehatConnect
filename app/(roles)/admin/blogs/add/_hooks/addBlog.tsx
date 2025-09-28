
"use server";

import { prisma } from "@/lib/db";
import { getAdmin } from "@/lib/helpers/auth";
import { z } from "zod";
import { blogSchema } from "../_components/BlogForm";


export async function addBlog(values: z.infer<typeof blogSchema>) {
  const admin = await getAdmin();
  if (!admin.success)
    throw new Error(admin.message || "Error while authenticating");

  try {
    const id = admin.admin?.id;
    if (!id) throw new Error("Error while authenticating");

    const countPopularBlogs = await prisma.blogs.count({where: {popular: true}});
    if(countPopularBlogs >= 4 && values.popular) throw new Error("Only 4 popular blogs are allowed");

    const blog = await prisma.blogs.create({
      data: {
        title: values.title,
        description: values.description,
        img: values.img,
        popular: values.popular,
        createdBy: id,
      },
    });
    return blog;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to add blog");
  }
}
