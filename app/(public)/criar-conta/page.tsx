import CreateAccountForm from "@/app/(public)/criar-conta/components/create-account-form";
import AuthLayout from "@/components/auth-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Criar Conta",
};

export default function CreateAccount() {
  return (
    <AuthLayout title="Criar Conta" subtitle="Crie sua conta Aprimora+">
      <CreateAccountForm />
    </AuthLayout>
  );
}
