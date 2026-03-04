import { AuthGuard } from "@/components/core/auth-guard";
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
        <AuthGuard>
          <main className="flex h-full w-full justify-center">{children}</main>
        </AuthGuard>
      </NuqsProvider>
    </AuthProvider>
  );
}
