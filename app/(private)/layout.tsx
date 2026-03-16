import { AppHeader } from "@/components/app-header";
import { AppSidebar } from "@/components/app-sidebar";
import { AuthGuard } from "@/components/core/auth-guard";
import { SidebarInset, SidebarProvider } from "@/components/core/sidebar";
import AuthProvider from "@/providers/auth-provider";
import NuqsProvider from "@/providers/nuqs-provider";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <NuqsProvider>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset className="flex flex-col min-h-screen">
            <AppHeader />
            <AuthGuard>
              <div className="flex h-full w-full justify-center">
                {children}
              </div>
            </AuthGuard>
          </SidebarInset>
        </SidebarProvider>
      </NuqsProvider>
    </AuthProvider>
  );
}
