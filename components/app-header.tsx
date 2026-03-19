"use client";

import { AnimatedThemeToggler } from "@/components/core/animated-theme-toggler";
import Input from "@/components/core/input";
import Row from "@/components/core/row";
import { SidebarTrigger } from "@/components/core/sidebar";
import { Menu as MenuIcon } from "lucide-react";

export function AppHeader() {
  return (
    <header className="sticky bg-background top-0 z-50 border-b min-h-18 flex items-center justify-between w-full px-4 xl:px-8">
      <Row className="w-full items-center justify-between gap-4">
        <Input
          isSearchInput
          placeholder="Pesquisar cursos"
          className="max-w-lg"
        />
        <Row className="items-center gap-2">
          <AnimatedThemeToggler />
          <SidebarTrigger
            className="hover:bg-muted rounded-lg transition-colors shrink-0 p-0! xl:hidden"
            aria-label="Abrir menu de navegação"
          >
            <MenuIcon
              className="w-6! h-6! text-muted-foreground"
              aria-hidden="true"
            />
          </SidebarTrigger>
        </Row>
      </Row>
    </header>
  );
}
