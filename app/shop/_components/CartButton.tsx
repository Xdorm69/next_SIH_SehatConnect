
"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { ShoppingCart } from "lucide-react";

const CartButton = () => {
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