"use client";

import { queryClient } from "@/libs/tanstack-query/query-client";
import { QueryClientProvider } from "@tanstack/react-query";

interface TanstackQueryProviderProps {
  children: React.ReactNode;
}

export const TanstackQueryProvider = ({
  children,
}: TanstackQueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient()}>{children}</QueryClientProvider>
  );
};
