"use client";

import SignOutButton from "@/app/(private)/perfil/components/sign-out-button";
import Column from "@/components/core/column";
import Row from "@/components/core/row";
import { Skeleton } from "@/components/core/skeleton";
import { useAuth } from "@/providers/auth-provider";
import { ChevronDown, FileBadge, Headset, Home, Monitor } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Collapsible as CollapsiblePrimitive } from "radix-ui";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "./core/sidebar";

export function AppSidebar() {
  const { profile, isLoadingAuth } = useAuth();
  const pathname = usePathname();

  const firstName = profile?.name?.split(" ")[0] || "";

  return (
    <Sidebar collapsible="offcanvas" aria-label="Menu de navegação principal">
      <SidebarContent className="flex overflow-hidden">
        <SidebarGroup className="flex items-center">
          <SidebarHeader className="p-0! h-16 items-center justify-center">
            <h1 className="w-full h-auto max-w-50 mb-2 shrink-0">
              Nexora
            </h1>
          </SidebarHeader>
          <SidebarGroupContent className="mt-5">
            <SidebarMenu aria-label="Menu principal">
              {mainItems.map((item) => {
                const hasSubItems = item.subItems && item.subItems.length > 0;
                const isActive = hasSubItems
                  ? pathname.startsWith(item.url)
                  : pathname === item.url;

                return (
                  <CollapsiblePrimitive.Root
                    key={item.title}
                    defaultOpen={isActive}
                    asChild
                  >
                    <SidebarMenuItem>
                      {hasSubItems ? (
                        <>
                          <CollapsiblePrimitive.Trigger asChild>
                            <SidebarMenuButton
                              isActive={isActive}
                              disabled={item.disabled}
                              className="flex relative text-muted-foreground cursor-pointer"
                            >
                              <item.icon
                                className="w-5! h-5!"
                                aria-hidden="true"
                              />
                              <span className="font-medium">
                                {item.title}
                              </span>
                              <ChevronDown className="ml-auto transition-transform group-data-[state=open]/menu-item:rotate-180" />
                            </SidebarMenuButton>
                          </CollapsiblePrimitive.Trigger>
                          <CollapsiblePrimitive.Content>
                            <SidebarMenuSub>
                              {item.subItems.map((subItem) => {
                                const isSubActive =
                                  pathname === subItem.url ||
                                  pathname.startsWith(subItem.url + "/");
                                return (
                                  <SidebarMenuSubItem key={subItem.title}>
                                    <SidebarMenuSubButton
                                      asChild
                                      isActive={isSubActive}
                                    >
                                      <Link href={subItem.url}>
                                        <span>{subItem.title}</span>
                                      </Link>
                                    </SidebarMenuSubButton>
                                  </SidebarMenuSubItem>
                                );
                              })}
                            </SidebarMenuSub>
                          </CollapsiblePrimitive.Content>
                        </>
                      ) : (
                        <SidebarMenuButton
                          asChild={!item.disabled}
                          isActive={isActive}
                          disabled={item.disabled}
                          className="flex relative text-muted-foreground"
                          aria-current={isActive ? "page" : undefined}
                        >
                          {item.disabled ? (
                            <>
                              <item.icon
                                className="w-5! h-5!"
                                aria-hidden="true"
                              />
                              <span className="font-medium">
                                {item.title}
                              </span>
                            </>
                          ) : (
                            <Link href={item.url}>
                              <item.icon
                                className="w-5! h-5!"
                                aria-hidden="true"
                              />
                              <span className="font-medium">
                                {item.title}
                              </span>
                            </Link>
                          )}
                        </SidebarMenuButton>
                      )}
                    </SidebarMenuItem>
                  </CollapsiblePrimitive.Root>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="items-center mb-2 space-y-4">
        <Row className="w-full items-center justify-center gap-2 hover:bg-muted transition-colors p-2 rounded-md h-12">
          <Column className="min-w-0 flex-1">
            {isLoadingAuth ? (
              <Column className="space-y-1">
                <Skeleton className="w-1/2 h-4" />
                <Skeleton className="w-full h-3" />
              </Column>
            ) : (
              <>
                <span className="text-sm font-medium truncate">
                  {firstName}
                </span>
                <span className="text-xs text-muted-foreground truncate">
                  {profile?.email}
                </span>
              </>
            )}
          </Column>
          <SignOutButton />
        </Row>
      </SidebarFooter>
    </Sidebar>
  );
}

const mainItems = [
  {
    title: "Início",
    url: "/",
    icon: Home,
    disabled: false,
    subItems: [],
  },
  {
    title: "Cursos",
    url: "/cursos",
    icon: Monitor,
    disabled: false,
    subItems: [
      { title: "Todos os cursos", url: "/cursos/todos-os-cursos" },
      { title: "Em andamento", url: "/cursos/cursos-em-andamento" },
    ],
  },
  {
    title: "Certificados",
    url: "/certificados",
    icon: FileBadge,
    disabled: false,
    subItems: [],
  },
  {
    title: "Suporte",
    url: "/suporte",
    icon: Headset,
    disabled: true,
    subItems: [],
  },
];
