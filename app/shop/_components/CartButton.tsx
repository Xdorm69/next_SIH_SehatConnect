
"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { ShoppingCart } from "lucide-react";
import { Product } from "@prisma/client";

const CartButton = ({product}: {product: Product}) => {
  const router = useRouter();

  return (
    <>
      <Button onClick={() => router.push("/shop/cart")} variant={"outline"}>
        <ShoppingCart />
      </Button>
    </>
  );
}

export default CartButton