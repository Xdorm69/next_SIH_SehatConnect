import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react'

export type filtersType = {
    state: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
}

type SearchFiltersProps = {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    className?: string;
    filters?: filtersType[];
}

const SearchFilters = ({search, setSearch, filters, className}: SearchFiltersProps) => {
    const [localSearch, setLocalSearch] = useState("");
    useEffect(() => {
        const t = setTimeout(() => {
            setSearch(localSearch);
        }, 500)
        return () => clearTimeout(t);
    }, [localSearch]);


  return (
    <div className={className}>
      <div className='flex justify-between items-center'> 
        <Input
        className='w-1/3'
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          placeholder="Search..."
        />

        <div>

        </div>
      </div>
    </div>
  );
}

export default SearchFilters