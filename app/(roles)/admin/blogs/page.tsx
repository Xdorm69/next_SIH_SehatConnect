// app/blogs/page.tsx
import { prisma } from "@/lib/db";
import getQueryClient from "@/lib/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import BlogPageClient from "./_components/BlogPageClient";
import { getServerBlogs } from "@/actions/blogs/getServerBlogs";



export default async function BlogPage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["blogs"],
    queryFn: getServerBlogs,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BlogPageClient />
    </HydrationBoundary>
  );
}
