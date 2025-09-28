"use client";
import { DataTable } from "@/components/DataTable";
import { userCols } from "./userCols";
import { User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../_hooks/getUsers";

const UserClientTable = ({
  initialData,
}: {
  initialData: { message: string; success: boolean; users: User[] };
}) => {
  const {
    data: res,
    isLoading,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
    initialData,
    staleTime: 2 * 60 * 1000,
  });

  if (!res && isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const data = res?.users;
  return (
    <div className="mt-6">
      <DataTable columns={userCols} data={data} />
    </div>
  );
};

export default UserClientTable;
