export async function getBlogs() {
  const res = await fetch("/api/blogs/server", {
    cache: "no-store",
    credentials: "include", // ✅ important for auth
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Failed to fetch blogs");
  return data;
}
