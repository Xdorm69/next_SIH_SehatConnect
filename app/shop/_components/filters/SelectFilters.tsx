"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const SelectFilters = ({
  filterStrings,
  className,
}: {
  filterStrings: string[];
  className?: string;
}) => {
  const [filters, setFilters] = useState<string[]>([]);

  const handleFilterChange = (filter: string) => {
    setFilters((prevFilters) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((f) => f !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  };

  return (
    <div className={className}>
      <div className="flex gap-4">
        {filterStrings.map((item, id) => {
          return (
            <Button
              key={id}
              variant={"outline"}
              className={cn(
                filters.includes(item) && "bg-primary text-background"
              )}
              onClick={() => handleFilterChange(item)}
            >
              {item}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default SelectFilters;
