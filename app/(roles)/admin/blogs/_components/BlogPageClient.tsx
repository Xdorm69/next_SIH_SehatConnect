"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import AddBlogBtn from "../_components/AddBlogBtn";
import { DataTable } from "@/components/DataTable";
import { Blogs } from "@prisma/client";
import BlogFns from "../_fns/blogFns";
import { useState } from "react";
import BlogColsWrapper from "./blogCols";
import { getBlogs } from "../_hooks/getBlogs";

export default function BlogPageClient() {
  const [loading, setLoading] = useState(false);
  const [popular, setPopular] = useState<boolean | undefined>(undefined);
  const queryClient = useQueryClient();

  // BLOG FNS
  const { handleEdit, seed, handleDeleteMany } = BlogFns(setLoading);

  //Cols
  const blogCols = BlogColsWrapper(setPopular);

  const { data, isLoading, isFetching, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => getBlogs(),
    initialData: () => queryClient.getQueryData(["blogs"]),
    staleTime: 2 * 60 * 1000,
  });

  if (!data && isLoading) return <p>Loading blogs...</p>;
  if (error) return <p className="text-red-500">{error.message}</p>;


  const blogs = data.all;

  // Filtered data based on popular toggle
  const filteredData = blogs.filter((blog: Blogs) => {
    if (popular !== undefined) return blog.popular === popular;
    return true;
  });

  return (
    <section>
      <div className="mb-12">
        <h1 className="heading mb-2">Manage Blogs</h1>
        <AddBlogBtn />
      </div>
      {isFetching && (
        <p className="text-sm text-muted-foreground">Refreshing...</p>
      )}

      <>
        {
          <DataTable
            columns={blogCols}
            data={filteredData}
            onEdit={handleEdit}
            onDeleteMany={handleDeleteMany}
            isLoading={isFetching || loading}
            seed={seed}
          />
        }
        
      </>
    </section>
  );
}
