"use client";

import { signIn } from "@/app/(public)/entrar/services/sign-in";
import Button from "@/components/core/button";
import Column from "@/components/core/column";
import Input from "@/components/core/input";
import Label from "@/components/core/label";
import Row from "@/components/core/row";
import { supabaseErrorsTranslator } from "@/utils/supabase-errors-translator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const signInFormSchema = z.object({
  email: z
    .string()
    .email("E-mail inválido")
    .min(1, "O campo email é obrigatório."),
  password: z.string().min(1, "O campo senha é obrigatório."),
});

type SignInFormSchemaType = z.infer<typeof signInFormSchema>;

const SignInForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInFormSchemaType>({
    resolver: zodResolver(signInFormSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: doLogin, isPending: pendingLogin } = useMutation({
    mutationFn: signIn,
    onSuccess: (result) => {
      if (result?.success) {
        router.push("/");
      }

      if (result?.error) {
        toast.error(supabaseErrorsTranslator(result.error));
      }
    },
  });

  const handleLogin = (data: SignInFormSchemaType) => {
    doLogin(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="flex flex-col gap-4 w-full"
    >
      <Column className="gap-2">
        <Label htmlFor="email" required>
          E-mail
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="seuemail@exemplo.com"
          autoComplete="email"
          error={errors.email?.message}
          disabled={pendingLogin}
          {...register("email")}
        />
        {errors.email && (
          <span className="text-xs text-red-800 font-medium">
            {errors.email.message}
          </span>
        )}
      </Column>
      <Column className="gap-2">
        <Row className="items-center justify-between">
          <Label htmlFor="password" required>
            Senha
          </Label>
          <Link
            href="/redefinir-senha"
            className="flex self-center text-primary hover:underline text-sm font-semibold"
          >
            Esqueci minha senha
          </Link>
        </Row>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          autoComplete="current-password"
          error={errors.password?.message}
          disabled={pendingLogin}
          {...register("password")}
        />
        {errors.password && (
          <span className="text-xs text-red-800 font-medium">
            {errors.password.message}
          </span>
        )}
      </Column>
      <Column className="mt-5 gap-4">
        <Button
          type="submit"
          className="hover:cursor-pointer w-full"
          disabled={!isValid || pendingLogin}
        >
          {pendingLogin ? (
            <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />
          ) : null}
          Entrar
        </Button>
        <Row className="items-center justify-center w-full gap-1">
          <span className="text-sm">Ainda não tem uma conta?</span>
          <Link
            href="/criar-conta"
            className="flex self-center text-primary hover:underline text-sm font-semibold"
          >
            Criar conta
          </Link>
        </Row>
      </Column>
    </form>
  );
};

export default SignInForm;
