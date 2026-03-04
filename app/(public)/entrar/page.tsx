import SignInForm from "@/app/(public)/entrar/components/sign-in-form";
import AuthLayout from "@/components/auth-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entrar",
};

export default function LoginPage() {
  return (
    <AuthLayout
      title="Entrar"
      subtitle="Entre com suas credenciais para continuar"
    >
      <SignInForm />
    </AuthLayout>
  );
}
