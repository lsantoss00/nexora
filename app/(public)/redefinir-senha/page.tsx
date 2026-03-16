import RecoveryPasswordForm from "@/app/(public)/redefinir-senha/components/recovery-password-form";
import AuthLayout from "@/components/auth-layout";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Redefinir Senha",
};

export default function RecoveryPasswordPage() {
  return (
    <AuthLayout
      title="Redefinir Senha"
      subtitle="Digite seu e-mail e nós iremos enviar as instruções para redefinição de senha."
    >
      <Suspense>
        <RecoveryPasswordForm />
      </Suspense>
    </AuthLayout>
  );
}
