import MaxWidthWrapper from "@/components/Wrappers/MaxWidthWrapper";
import React from "react";
import LatestBlogClient from "./_components/LatestBlogClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import getQueryClient from "@/lib/getQueryClient";
import { Blogs } from "@prisma/client";
import BlogHero from "./_components/sections/BlogsHero";
import BlogsCTA from "./_components/sections/BlogsCTA";
import ArticleCard from "./_components/ArticleCard";
import { getSSRWebBlogs } from "@/actions/blogs/getSSRWebBlogs";

const BlogPage = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["blogs"],
    queryFn: () => getSSRWebBlogs(),
  });

  const { all, popular, count } = queryClient.getQueryData(["blogs"]) as {
    all: Blogs[];
    popular: Blogs[];
    count: number;
  };

  return (
    <main>
      <BlogHero />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <BlogPopular blogs={popular} />
        <BlogLatest blogs={all} count={count} />
      </HydrationBoundary>
      <BlogsCTA />
    </main>
  );
};

export default BlogPage;

const BlogPopular = async ({ blogs }: { blogs: Blogs[] }) => {
  return (
    <section className="pt-18 min-h-screen">
      <MaxWidthWrapper>
        <h1 className="heading mb-8">Popular Articles</h1>

        <div className="grid lg:grid-cols-4 grid-rows-[150px_150px_150px] gap-4">
          {blogs &&
            blogs.map((article, i) => (
              <ArticleCard
                key={i}
                orientation={i == 0 ? "vertical" : "horizontal"}
                date={article.createdAt}
                className={
                  i == 0 ? "col-span-2 row-span-3" : "col-span-2 row-span-1"
                }
                img={article.img}
                title={article.title}
                popular={article.popular}
              />
            ))}
          {!blogs && <p>Loading...</p>}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

async function BlogLatest({ blogs, count }: { blogs: Blogs[]; count: number }) {
  return (
    <section className="py-18 min-h-screen bg-zinc-200">
      <MaxWidthWrapper>
        <h1 className="heading mb-8">Latest Articles</h1>

        <LatestBlogClient blogs={blogs} count={count} />
      </MaxWidthWrapper>
    </section>
  );
}
