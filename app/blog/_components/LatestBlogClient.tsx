"use client";
import React, { useState } from "react";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Blogs } from "@prisma/client";
import { getBlogs } from "../_hooks/getBlogs";
import ArticleCard from "./ArticleCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";

const LatestBlogClient = ({
  blogs,
  count,
}: {
  blogs: Blogs[];
  count: number;
}) => {
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const {
    data: res,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blogs", page], // refetch when page changes
    queryFn: () => getBlogs(page, pageSize),
    initialData:
      page === 1
        ? {
            success: true,
            message: "Prefetched",
            all: blogs,
            count,
            page,
            totalPages: Math.ceil(count / pageSize),
          }
        : undefined,
    placeholderData: keepPreviousData,
    staleTime: 2 * 60 * 1000,
  });

  if (!res && isLoading) return <p>Loading...</p>;
  if (!res.success) return <p>{res.message}</p>;
  if (error) return <p>{(error as Error).message}</p>;

  const totalPages = res.totalPages;
  const data = res.all;

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-rows-[400px_400px] gap-8">
        {data.map((item: Blogs) => item.description && (
          <ArticleCard
            orientation="vertical"
            key={item.id}
            date={new Date(item.createdAt)}
            img={item.img}
            title={item.title}
            description={item.description || ""}
          />
        ))}
        {data.length === 0 && <p>No articles found</p>}
      </div>

      {/* PAGINATION */}
      <div className="w-full mt-8 flex items-center justify-between">
        <Button
          variant="outline"
          className="flex items-center gap-1"
          disabled={page <= 1}
          onClick={() => setPage(page - 1)}
        >
          <ChevronLeft className="size-5" /> <p>Previous</p>
        </Button>

        <div>
          {Array.from({ length: totalPages }).map((_, i) => (
            <Button
              key={i}
              className="rounded-full"
              variant={i + 1 === page ? "default" : "ghost"}
            >
              {i + 1}
            </Button>
          ))}
        </div>

        <Button
          variant="outline"
          className="flex items-center gap-1"
          disabled={page >= totalPages}
          onClick={() => setPage(page + 1)}
        >
          <p>Next</p> <ChevronRight className="size-5" />
        </Button>
      </div>
    </>
  );
};

export default LatestBlogClient;
