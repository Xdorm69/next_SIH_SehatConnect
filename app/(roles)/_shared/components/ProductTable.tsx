"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@prisma/client";
import { ProductCols } from "./ProductCols";
import { getProducts } from "../_hooks/getProducts";
import { DataTable } from "@/components/DataTable";
import { ProductFns } from "../_fns/productFns";

const ProductTable = ({
  initialData,
  vendorId,
}: {
  initialData: { message: string; success: boolean; products: Product[] };
  vendorId?: string;
}) => {
  const [loading, setLoading] = useState(false);
  const {
    data: res,
    isLoading,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(vendorId as string),
    initialData,
    staleTime: 2 * 60 * 1000,
  });

  if (!res && isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const data = res?.products;

  const { seed } = ProductFns({ setLoading, vendorId: vendorId as string });

  return (
    <div className="mt-6">
      <DataTable
        columns={ProductCols}
        isLoading={loading}
        seed={seed}
        data={data}
      />
    </div>
  );
};

export default ProductTable;
