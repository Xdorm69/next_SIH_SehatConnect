"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2 } from "lucide-react";

export interface ColumnDef<T> {
  accessor: keyof T;
  header: React.ReactNode;
  render?: (row: T) => React.ReactNode;
  filter?: (row: T, value: unknown) => boolean;
  filterValue?: unknown; // so column-specific filters can work
}

interface DataTableProps<T extends { id: string | number }> {
  columns: ColumnDef<T>[];
  data: T[];
  seed?: () => void;
  onEdit?: (row: T) => void;
  onDeleteMany?: (rows: T[]) => void;
  isLoading?: boolean;
  pageSize?: number;
}

export function DataTable<T extends { id: string | number }>({
  columns,
  data,
  seed,
  onEdit,
  onDeleteMany,
  isLoading,
  pageSize = 10,
}: DataTableProps<T>) {
  const [selected, setSelected] = React.useState<Set<T["id"]>>(new Set());
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);

  // Filtered data
  const filteredData = React.useMemo(() => {
    let tempData = [...data];

    if (search) {
      tempData = tempData.filter((item) =>
        Object.values(item).some((val) =>
          String(val).toLowerCase().includes(search.toLowerCase())
        )
      );
    }

    columns.forEach((col) => {
      if (col.filterValue !== undefined && col.filter) {
        tempData = tempData.filter((row) => col.filter?.(row, col.filterValue));
      }
    });

    return tempData;
  }, [data, search, columns]);

  // Pagination
  const totalPages = Math.ceil(filteredData.length / pageSize);
  const paginatedData = filteredData.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  // Multi-select
  const toggleRow = (id: T["id"]) => {
    setSelected((prev) => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  const toggleAll = () => {
    if (selected.size === paginatedData.length) {
      setSelected(new Set());
    } else {
      setSelected(new Set(paginatedData.map((d) => d.id)));
    }
  };

  const isAllSelected = selected.size === paginatedData.length;
  const isIndeterminate =
    selected.size > 0 && selected.size < paginatedData.length;

  return (
    <div className="space-y-4">
      <div className="flex w-full justify-between items-center">
        {/* Search */}
        <Input
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="max-w-sm bg-card"
        />

        <div className="flex gap-2">
          {/* Seed Button */}
          {seed && (
            <Button onClick={seed} disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="animate-spin h-4 w-4" />
              ) : (
                "Seed"
              )}
            </Button>
          )}

          {/* Delete Selected */}
          {onDeleteMany && (
            <Button
              variant="destructive"
              disabled={selected.size === 0 || isLoading}
              onClick={() => {
                const rowsToDelete = paginatedData.filter((row) =>
                  selected.has(row.id)
                );
                onDeleteMany(rowsToDelete);
                setSelected(new Set());
              }}
            >
              {isLoading ? (
                <Loader2 className="animate-spin h-4 w-4" />
              ) : (
                `Delete Selected (${selected.size})`
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Table */}
      <Table className="bg-card rounded shadow">
        <TableHeader>
          <TableRow>
            {onDeleteMany && (
              <TableHead>
                <Checkbox checked={isAllSelected} onCheckedChange={toggleAll} />
              </TableHead>
            )}
            {columns.map((col) => (
              <TableHead key={String(col.accessor)}>{col.header}</TableHead>
            ))}
            {onEdit && <TableHead>Actions</TableHead>}
          </TableRow>
        </TableHeader>

        <TableBody>
          {!paginatedData.length && (
            <TableRow>
              <TableCell
                className="text-center py-4"
                colSpan={
                  columns.length + (onEdit ? 1 : 0) + (onDeleteMany ? 1 : 0)
                }
              >
                No Data Available
              </TableCell>
            </TableRow>
          )}

          {paginatedData.map((row) => (
            <TableRow key={row.id}>
              {onDeleteMany && (
                <TableCell>
                  <Checkbox
                    checked={selected.has(row.id)}
                    onCheckedChange={() => toggleRow(row.id)}
                  />
                </TableCell>
              )}
              {columns.map((col) => (
                <TableCell key={String(col.accessor)}>
                  {col.render
                    ? col.render(row)
                    : (row[col.accessor as keyof T] as React.ReactNode)}
                </TableCell>
              ))}
              {onEdit && (
                <TableCell>
                  <Button
                    disabled={selected.size > 1}
                    size="sm"
                    variant="outline"
                    onClick={() => onEdit(row)}
                  >
                    Edit
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-end space-x-2 mt-2 items-center">
          <Button
            size="sm"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            Prev
          </Button>
          <span>
            Page {page} of {totalPages}
          </span>
          <Button
            size="sm"
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
