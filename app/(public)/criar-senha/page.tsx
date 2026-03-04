import PasswordForm from "@/app/(public)/criar-senha/components/password-form";
import AuthLayout from "@/components/auth-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criar Senha",
};

export default function CreateNewPasswordPage() {
  return (
    <AuthLayout
      title="Criar Senha"
      subtitle="Defina uma nova senha para sua conta Nexora"
    >
      <PasswordForm />
    </AuthLayout>
  );
}
