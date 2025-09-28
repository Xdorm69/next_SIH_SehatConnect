import { ColumnDef } from "@/components/DataTable";
import HoverReveal from "@/components/HoverReveal";
import RenderDate from "@/components/RenderDate";
import { Product } from "@prisma/client";

export const ProductCols: ColumnDef<Product>[] = [
  {
    accessor: "id",
    header: "Id",
    render: (row) => <HoverReveal data={row.id} />,
  },
  {
    accessor: "name",
    header: "Name",
  },
  {
    accessor: "description",
    header: "Description",
    render: (row) => <HoverReveal data={row.description || ""} />,
  },
  {
    accessor: "price",
    header: "Price",
  },
  {
    accessor: "stock",
    header: "Stock",
  },
  {
    accessor: "createdAt",
    header: "Created At",
    render: (row) => <RenderDate date={row.createdAt} />,
  },
  {
    accessor: "updatedAt",
    header: "Updated At",
    render: (row) => <RenderDate date={row.updatedAt} />,
  },
];
