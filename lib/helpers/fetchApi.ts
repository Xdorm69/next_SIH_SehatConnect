export type ApiResponseType<T> = {
  success: boolean;
  message: string;
  data: T[];
};

export const fetchApi = async <T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  body?: any
): Promise<ApiResponseType<T>> => {
  const res = await fetch(url, {
    method,
    credentials: "include", // ✅ important for auth
    cache: "no-store",
    headers: body ? { "Content-Type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await res.json();

  if (!res.ok) throw new Error(data.message || "Failed to fetch");

  return data as ApiResponseType<T>;
};
