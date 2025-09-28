
 
import { User, UserRoles } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import HoverReveal from "@/components/HoverReveal";
import RenderDate from "@/components/RenderDate";
import { ColumnDef } from "@/components/DataTable";

// Labels for roles
const roleLabels: Record<UserRoles, string> = {
  USER: "User",
  VENDOR: "Vendor",
  DOCTOR: "Doctor",
  ADMIN: "Admin",
};

export const userCols: ColumnDef<User>[] = [
  {
    accessor: "id",
    header: "Id",
    render: (row) => <HoverReveal data={row.id} />
  },
  {
    accessor: "username",
    header: (
      <div className="flex items-center gap-2">
        Username <ArrowUpDown className="h-4 w-4" />
      </div>
    ),
  },
  {
    accessor: "email",
    header: "Email",
    render: (row) => <HoverReveal data={row.email} />,
  },
  {
    accessor: "phone",
    header: "Phone",
  },
  {
    accessor: "role",
    header: (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="flex items-center gap-1">
            Role <ArrowUpDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {Object.values(UserRoles).map((role) => (
            <DropdownMenuItem
              key={role}
              onClick={() => {
                // You can implement your custom filter logic in DataTable
                console.log("Filter by role:", role);
              }}
            >
              {roleLabels[role]}
            </DropdownMenuItem>
          ))}
          <DropdownMenuItem
            onClick={() => {
              console.log("Filter by all roles");
            }}
          >
            All
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    ),
    render: (row) => (
      <span className="font-medium">{roleLabels[row.role]}</span>
    ),
  },
  {
    accessor: "createdAt",
    header: (
      <div className="flex items-center gap-2">
        Created At <ArrowUpDown className="h-4 w-4" />
      </div>
    ),
    render: (row) => <RenderDate date={row.createdAt} />,
  },
];
