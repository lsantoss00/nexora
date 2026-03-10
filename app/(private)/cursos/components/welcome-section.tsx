"use client";

import Column from "@/components/core/column";
import { Skeleton } from "@/components/core/skeleton";
import { useAuth } from "@/providers/auth-provider";

import PageHeader from "@/components/page-header";

interface WelcomeSectionProps {
  inProgressCount: number;
}

const WelcomeSection = ({ inProgressCount }: WelcomeSectionProps) => {
  const { profile, isLoadingAuth } = useAuth();

  if (isLoadingAuth) {
    return (
      <Column className="gap-2">
        <Skeleton className="h-9 w-80" />
        <Skeleton className="h-5 w-64" />
      </Column>
    );
  }

  const firstName = profile?.name.split(" ")[0] || "Usuário";

  return (
    <Column as="header" className="gap-1">
      <PageHeader
        title={
          <>
            Bem vindo, <span className="text-primary">{firstName}</span>
          </>
        }
        subtitle={`Você tem ${inProgressCount} cursos em andamento. Mantenha o foco!`}
      />
    </Column>
  );
};

export default WelcomeSection;
