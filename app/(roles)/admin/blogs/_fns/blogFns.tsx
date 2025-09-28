"use client"

import { Blogs } from "@prisma/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { deleteBlogs } from "../_hooks/deleteBlogs";
import { seedBlogs } from "../_hooks/seedBlog";



export default function BlogFns(setLoading: (loading: boolean) => void) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const adminId = session?.user.id;

  const handleEdit = (blog: Blogs) =>
    router.push(`/admin/blogs/add/${blog.id}`);

  const handleDeleteMany = async (blogs: Blogs[]) => {
    setLoading(true);
    await deleteBlogs(blogs);
    toast.success("Blogs deleted");
    queryClient.invalidateQueries({ queryKey: ["blogs"] });
    setLoading(false);
  };

  const seed = async () => {
    setLoading(true);
    try {
      await seedBlogs(adminId as string); // await async call
      toast.success("Seed Operation Completed");
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    } catch (error) {
      toast.error("Seed failed");
    } finally {
      setLoading(false);
    }
  };

  return {
    handleEdit,
    handleDeleteMany,
    seed,
  };
}