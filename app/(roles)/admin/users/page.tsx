import getQueryClient from "@/lib/getQueryClient";
import UserClientTable from "./_components/UserClientTable";
import { getSSRUsers } from "@/actions/users/getSSRUsers";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { User } from "@prisma/client";

const UsersPageAdmin = async () => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["users"],
    queryFn: getSSRUsers,
  });
  const dehydratedState = dehydrate(queryClient);

  const data =
    (queryClient.getQueryData(["users"]) as {
      message: string;
      success: boolean;
      users: User[];
    }) || [];

  return (
    <div>
      <h1 className="heading">Manage Users</h1>
      <HydrationBoundary state={dehydratedState}>
        <UserClientTable initialData={data} />
      </HydrationBoundary>
    </div>
  );
};

export default UsersPageAdmin;
