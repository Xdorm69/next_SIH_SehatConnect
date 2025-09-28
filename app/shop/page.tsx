
import MaxWidthWrapper from "@/components/Wrappers/MaxWidthWrapper";
import React from "react";
import SelectFilters from "./_components/filters/SelectFilters";
import SearchFilters from "./_components/filters/SearchFilters";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import CartButton from "./_components/CartButton";
import { prisma } from "@/lib/db";
import { Product } from "@prisma/client";
import { ProductCard } from "./_components/ProductCard";



const ShopPage = async () => {
  const filtersStrings = ["Medicines", "Drugs", "Health Kits"];
  // const [search, setSearch] = useState("");

  const ProductsData = await prisma.product.findMany();

  return (
    <section className="mt-8 md:mt-14 py-18 min-h-screen">
      <MaxWidthWrapper>
        <div>
          <h1 className="heading">Pharmacy 😷</h1>
          <p className="desc md:w-1/2">
            Explore our wide range of essential health products. Simple,
            reliable solutions for your family.
          </p>
        </div>

        {/* <SelectFilters filterStrings={filtersStrings} className="mt-4" /> */}
        {/* <SearchFilters search={search} setSearch={setSearch} className="mt-4" /> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 space-y-8 mt-12">
          {ProductsData.map((item: Product, id) => (
            <ProductCard key={id} data={item} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};


export default ShopPage;
