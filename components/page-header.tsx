"use client";

import Column from "@/components/core/column";
import { Skeleton } from "@/components/core/skeleton";
import { useAuth } from "@/providers/auth-provider";

interface PageHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  const { isLoadingAuth } = useAuth();

  if (isLoadingAuth) {
    return (
      <Column className="gap-2">
        <Skeleton className="h-9 w-80" />
        <Skeleton className="h-5 w-64" />
      </Column>
    );
  }

  return (
    <Column as="header" className="gap-1">
      <h1 className="text-2xl font-bold md:text-3xl">{title}</h1>
      <p className="text-sm text-muted-foreground">{subtitle}</p>
    </Column>
  );
};

export default PageHeader;
