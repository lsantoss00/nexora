"use client";

import { signOut } from "@/app/(public)/entrar/services/sign-out";
import Input from "@/components/core/input";
import Row from "@/components/core/row";
import { SidebarTrigger } from "@/components/core/sidebar";
import { queryClient } from "@/libs/tanstack-query/query-client";
import { useAuth } from "@/providers/auth-provider";
import { useMutation } from "@tanstack/react-query";
import { Menu as MenuIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export function AppHeader() {
  const { profile } = useAuth();
  const router = useRouter();

  const { mutate: doSignOut, isPending: pendingDoSignOut } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      queryClient.clear();

      router.push("/entrar");
    },
  });

  return (
    <header className="sticky bg-sidebar top-0 z-50 border-b h-14 flex items-center justify-between w-full px-4 xl:px-8">
      <Row className="w-full items-center justify-between  gap-4">
        <Input
          isSearchInput
          placeholder="Pesquisar cursos"
          className="max-w-lg"
        />
        <SidebarTrigger
          className="hover:bg-gray-100 rounded-md transition-colors shrink-0 p-0! xl:hidden"
          aria-label="Abrir menu de navegação"
        >
          <MenuIcon
            className="w-6! h-6! text-muted-foreground"
            aria-hidden="true"
          />
        </SidebarTrigger>
      </Row>
    </header>
  );
}
