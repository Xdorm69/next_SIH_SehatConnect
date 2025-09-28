// _hooks/getBlogs.ts
export const getBlogs = async (page: number = 1, pageSize: number = 6) => {
  const res = await fetch(`/api/blogs/client?page=${page}&pageSize=${pageSize}`, {
    cache: "no-store",
    credentials: "include",
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to fetch blogs");
  return data;
};
