"use client";
import MaxWidthWrapper from "@/components/Wrappers/MaxWidthWrapper";
import React, { useState } from "react";
import SelectFilters from "./_components/filters/SelectFilters";
import SearchFilters from "./_components/filters/SearchFilters";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import CartButton from "./_components/CartButton";

type productCardType = {
  id: string;
  title: string;
  description: string;
  img: string;
  slug: string;
};

const ShopPage = () => {
  const filtersStrings = ["Medicines", "Drugs", "Health Kits"];
  const [search, setSearch] = useState("");

  const ProductsData: productCardType[] = [
    {
      id: "1",
      title: "Paracetamol 500mg",
      description: "Effective for fever and mild pain relief.",
      img: "/home/essentials/1.jpg",
      slug: "paracetamol-500",
    },
    {
      id: "2",
      title: "Amoxicillin 250mg",
      description: "Antibiotic used to treat bacterial infections.",
      img: "/home/essentials/2.jpg",
      slug: "amoxicillin-250",
    },
    {
      id: "3",
      title: "ORS Hydration Pack",
      description: "Oral rehydration solution for dehydration recovery.",
      img: "/home/essentials/3.jpg",
      slug: "ors-hydration-pack",
    },
    {
      id: "4",
      title: "First Aid Kit",
      description: "Essential kit with bandages, antiseptics, and more.",
      img: "/home/essentials/4.jpg",
      slug: "first-aid-kit",
    },
    {
      id: "5",
      title: "Blood Pressure Monitor",
      description: "Digital monitor for tracking blood pressure at home.",
      img: "/home/essentials/5.jpg",
      slug: "blood-pressure-monitor",
    },
    {
      id: "6",
      title: "Vitamin C Tablets",
      description: "Boost immunity and support overall health.",
      img: "/home/essentials/6.jpg",
      slug: "vitamin-c-tablets",
    },
    {
      id: "7",
      title: "Diabetes Test Strips",
      description: "Accurate strips for home glucose monitoring.",
      img: "/home/essentials/7.jpg",
      slug: "diabetes-test-strips",
    },
    {
      id: "8",
      title: "Cough Syrup 100ml",
      description: "Soothes dry and wet cough with quick relief.",
      img: "/home/essentials/8.jpg",
      slug: "cough-syrup",
    },
    {
      id: "9",
      title: "Pain Relief Balm",
      description: "Herbal balm for muscle and joint pain relief.",
      img: "/home/essentials/9.jpg",
      slug: "pain-relief-balm",
    },
    {
      id: "10",
      title: "Hand Sanitizer 200ml",
      description: "Kills 99.9% of germs, safe for daily use.",
      img: "/home/essentials/10.jpg",
      slug: "hand-sanitizer",
    },
    {
      id: "11",
      title: "Face Masks (Pack of 10)",
      description: "Protective masks for personal and family safety.",
      img: "/home/essentials/11.jpg",
      slug: "face-masks",
    },
    {
      id: "12",
      title: "Ayurvedic Immunity Booster",
      description: "Natural supplement for stronger immunity.",
      img: "/home/essentials/12.jpg",
      slug: "ayurvedic-immunity-booster",
    },
  ];

  return (
    <section className="mt-14 py-18 min-h-screen">
      <MaxWidthWrapper>
        <div>
          <h1 className="heading">Pharmacy 😷</h1>
          <p className="desc w-1/2">
            Explore our wide range of essential health products. Simple,
            reliable solutions for your family.
          </p>
        </div>

        <SelectFilters filterStrings={filtersStrings} className="mt-4" />
        <SearchFilters search={search} setSearch={setSearch} className="mt-4" />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-4 space-y-8 mt-12">
          {ProductsData.map((item, id) => (
            <ProductCard key={id} data={item} />
          ))}
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const ProductCard = ({ data }: { data: productCardType }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col h-fit shadow rounded overflow-hidden">
      <div
        onClick={() => router.push(`/shop/${data.id}`)}
        className={cn("w-full h-[180px] bg-amber-200")}
      >
        {data.img}
      </div>

      <div className="w-full h-1/3 p-4">
        <h6 className="border-1 rounded-full px-2 py-1 border-emerald-300 hover:bg-emerald-600 transition-colors cursor-pointer hover:text-white w-fit text-xs mb-4">
          {data.slug}
        </h6>
        <h4 className="font-sans font-semibold text-lg line-clamp-1">
          {data.title}
        </h4>
        <p className="text-muted-foreground line-clamp-2 text-sm">
          {data.description}
        </p>

        {/* BUY / CART  */}
        <div className="flex gap-2 mt-4">
          <Button>Buy Now</Button>
          <CartButton />
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
