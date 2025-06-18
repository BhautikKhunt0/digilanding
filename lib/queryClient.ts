import { QueryClient } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const message = await res.text();
    throw new Error(message);
  }
}

export async function apiRequest(
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
  url: string,
  data?: any
): Promise<any> {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: data ? JSON.stringify(data) : undefined,
  });

  await throwIfResNotOk(response);
  return response.json();
}

type UnauthorizedBehavior = "returnNull" | "throw";

export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => (ctx: { queryKey: readonly string[] }) => Promise<T | null> = <T>({
  on401,
}: {
  on401: UnauthorizedBehavior;
}) => {
  return async ({ queryKey }) => {
    const [url] = queryKey;
    try {
      const response = await fetch(url);
      if (response.status === 401) {
        if (on401 === "returnNull") {
          return null;
        }
        throw new Error("Unauthorized");
      }
      await throwIfResNotOk(response);
      return response.json();
    } catch (error) {
      if (error instanceof Error && error.message.includes("401")) {
        if (on401 === "returnNull") {
          return null;
        }
      }
      throw error;
    }
  };
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: (failureCount, error) => {
        if (error instanceof Error && error.message.includes('401')) {
          return false
        }
        return failureCount < 3
      },
    },
  },
});