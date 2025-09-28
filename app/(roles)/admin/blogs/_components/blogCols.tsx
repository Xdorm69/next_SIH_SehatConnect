import { ColumnDef } from "@/components/DataTable";
import { Blogs } from "@prisma/client";
import HoverReveal from "@/components/HoverReveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpDown } from "lucide-react";
import RenderDate from "@/components/RenderDate";
import { Dispatch, SetStateAction } from "react";

// Columns definition
const BlogColsWrapper = (
  setPopular: Dispatch<SetStateAction<boolean | undefined>>
) => {
  const blogCols: ColumnDef<Blogs>[] = [
    {
      accessor: "title",
      header: "Title",
      render: (row) => <HoverReveal data={row.title} />,
    },
    {
      accessor: "description",
      header: "Description",
      render: (row) => <HoverReveal data={row.description || ""} />,
    },
    {
      accessor: "img",
      header: "Image",
      render: (row) => (
        <img
          width={50}
          height={50}
          loading="lazy"
          src={row.img}
          alt={row.title}
          className="size-8 rounded bg-zinc-500"
        />
      ),
    },
    {
      accessor: "popular",
      header: (
        <Button
          className="px-0"
          variant={"ghost"}
          onClick={() => {
            // Toggle popular state: undefined → true → false → undefined
            setPopular((prev) =>
              prev === undefined ? true : prev === true ? false : undefined
            );
          }}
        >
          Popular <ArrowUpDown className="size-4" />
        </Button>
      ),
      render: (row) =>
        row.popular ? (
          <Badge className="bg-emerald-400">YES</Badge>
        ) : (
          <Badge className="bg-red-400">NO</Badge>
        ),
    },
    {
      accessor: "createdBy",
      header: "Created By",
      render: (row) => <HoverReveal data={row.createdBy || ""} />,
    },
    { accessor: "clicks", header: "Clicks" },
    {
      accessor: "createdAt",
      header: "Created At",
      render: (row) => <RenderDate date={row.createdAt}/>,
    },
    {
      accessor: "updatedAt",
      header: "Updated At",
      render: (row) => <RenderDate date={row.updatedAt}/>,
    },
  ];
  return blogCols;
};

export default BlogColsWrapper;