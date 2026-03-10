"use client";

import { signOut } from "@/app/(public)/entrar/services/sign-out";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
} from "@/components/core/dropdown-menu";
import Input from "@/components/core/input";
import Row from "@/components/core/row";
import { SidebarTrigger } from "@/components/core/sidebar";
import { queryClient } from "@/libs/tanstack-query/query-client";
import { useAuth } from "@/providers/auth-provider";
import { useMutation } from "@tanstack/react-query";
import { Loader2Icon, LogOut, Menu as MenuIcon } from "lucide-react";
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
    <header className="sticky bg-sidebar top-0 z-50 border-b h-14 flex items-center justify-between w-full px-4 xl:px-16">
      <Row className="w-full items-center justify-between xl:hidden">
        {/* <Image
        src={shortLogo}
        alt="Precific | Plataforma de Precificação Inteligente"
        width={40}
        height={40}
        sizes="48px"
        className="hover:cursor-pointer shrink-0"
      /> */}
        <h1 className="hover:cursor-pointer shrink-0">N</h1>
        <SidebarTrigger
          className="hover:bg-gray-100 rounded-md transition-colors shrink-0 p-0!"
          aria-label="Abrir menu de navegação"
        >
          <MenuIcon
            className="w-6! h-6! text-muted-foreground"
            aria-hidden="true"
          />
        </SidebarTrigger>
        <DropdownMenu modal={false}>
          <DropdownMenuContent className="w-56 p-1" align="end">
            <DropdownMenuLabel className="flex flex-col">
              <span className="text-xs sm:text-sm text-neutral-500">
                {profile?.name}
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-red-800! cursor-pointer"
              onClick={() => doSignOut()}
            >
              Sair
              <DropdownMenuShortcut>
                {!pendingDoSignOut ? (
                  <LogOut className="text-red-800" aria-hidden="true" />
                ) : (
                  <Loader2Icon
                    className="animate-spin text-red-800"
                    aria-label="Saindo..."
                  />
                )}
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </Row>
      <Input
        isSearchInput
        placeholder="Pesquisar cursos"
        className="max-w-lg"
      />
    </header>
  );
}
