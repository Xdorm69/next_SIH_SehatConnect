export async function getProducts(vendorId: string) {
  const res = await fetch("/api/products/" + vendorId);
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Error fetching products");
  return data;
}
