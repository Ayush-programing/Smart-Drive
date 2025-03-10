import { useQuery } from "@tanstack/react-query";

export function useReusableQuery(key: string, fn: any) {
  const { data, error, isLoading } = useQuery({ queryKey: [key], queryFn: fn });

  return { data, error, isLoading };
}
