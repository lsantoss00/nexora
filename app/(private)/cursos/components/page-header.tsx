"use client";

import Column from "@/components/core/column";
import { Skeleton } from "@/components/core/skeleton";
import { useAuth } from "@/providers/auth-provider";

import SignOutButton from "@/app/(private)/perfil/components/sign-out-button";
import { mockCourses } from "../data/mock-courses";

const inProgressCount = mockCourses.filter(
  (course) => course.progress !== undefined && course.progress > 0,
).length;

const PageHeader = () => {
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
      <SignOutButton />
      <h1 className="text-2xl font-bold md:text-3xl">
        Bem vindo de volta, <span className="text-primary">{firstName}</span>
      </h1>
      <p className="text-sm text-muted-foreground">
        Você tem {inProgressCount} cursos em andamento. Mantenha o foco!
      </p>
    </Column>
  );
};

export default PageHeader;
