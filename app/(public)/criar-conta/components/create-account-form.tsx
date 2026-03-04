"use client";

import { signUp } from "@/app/(public)/criar-conta/services/sign-up";
import Button from "@/components/core/button";
import Checkbox from "@/components/core/checkbox";
import Column from "@/components/core/column";
import Input from "@/components/core/input";
import Label from "@/components/core/label";
import Row from "@/components/core/row";
import { supabaseErrorsTranslator } from "@/utils/supabase-errors-translator";
import { toast } from "@/utils/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const createAccountFormSchema = z
  .object({
    name: z.string().min(1, "O campo nome é obrigatório."),
    email: z.email("E-mail inválido").min(1, "O campo email é obrigatório."),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres."),
    confirmPassword: z
      .string()
      .min(1, "O campo confirmar senha é obrigatório."),
    acceptTerms: z.boolean().refine((v) => v === true, {
      message:
        "Você deve aceitar os termos de uso e a política de privacidade.",
    }),
    // acceptRecaptcha: z.boolean().refine((v) => v === true, {
    //   message: "Você deve confirmar que não é um robô.",
    // }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });

type CreateAccountFormSchemaType = z.infer<typeof createAccountFormSchema>;

const CreateAccountForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CreateAccountFormSchemaType>({
    resolver: zodResolver(createAccountFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
      // acceptRecaptcha: false,
    },
  });

  const { mutate: doSignUp, isPending: pendingSignUp } = useMutation({
    mutationFn: signUp,
    onSuccess: (result) => {
      if (result?.success) {
        toast.success("Conta criada com sucesso!");
        router.push("/entrar");
      }

      if (result?.error) {
        toast.error(supabaseErrorsTranslator(result.error), {
          className: "!bg-red-700 !text-white",
        });
      }
    },
  });

  const handleCreateAccount = (data: CreateAccountFormSchemaType) => {
    doSignUp({
      name: data.name,
      email: data.email,
      password: data.password,
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleCreateAccount)}
      className="flex flex-col gap-4 w-full"
    >
      <Column className="gap-2">
        <Label htmlFor="name" required>
          Nome
        </Label>
        <Input
          id="name"
          type="text"
          placeholder="Seu nome completo"
          autoComplete="name"
          error={errors.name?.message}
          disabled={pendingSignUp}
          {...register("name")}
        />
        {errors.name && (
          <span className="text-xs text-red-800 font-medium">
            {errors.name.message}
          </span>
        )}
      </Column>
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
          disabled={pendingSignUp}
          {...register("email")}
        />
        {errors.email && (
          <span className="text-xs text-red-800 font-medium">
            {errors.email.message}
          </span>
        )}
      </Column>
      <Column className="gap-2">
        <Label htmlFor="password" required>
          Senha
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="••••••••"
          autoComplete="new-password"
          error={errors.password?.message}
          disabled={pendingSignUp}
          {...register("password")}
        />
        {errors.password && (
          <span className="text-xs text-red-800 font-medium">
            {errors.password.message}
          </span>
        )}
      </Column>
      <Column className="gap-2">
        <Label htmlFor="confirmPassword" required>
          Confirmar Senha
        </Label>
        <Input
          id="confirmPassword"
          type="password"
          placeholder="••••••••"
          autoComplete="new-password"
          error={errors.confirmPassword?.message}
          disabled={pendingSignUp}
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span className="text-xs text-red-800 font-medium">
            {errors.confirmPassword.message}
          </span>
        )}
      </Column>
      <Column className="gap-3">
        <Controller
          name="acceptTerms"
          control={control}
          render={({ field }) => (
            <Column className="gap-1">
              <Row className="items-center gap-2">
                <Checkbox
                  id="acceptTerms"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  disabled={pendingSignUp}
                />
                <Label htmlFor="acceptTerms" required>
                  Li e aceito os{" "}
                  <Link
                    href="/termos-de-uso"
                    className="text-primary hover:underline"
                  >
                    Termos de Uso
                  </Link>{" "}
                  e a{" "}
                  <Link
                    href="/politica-de-privacidade"
                    className="text-primary hover:underline"
                  >
                    Política de Privacidade
                  </Link>
                  .
                </Label>
              </Row>
              {errors.acceptTerms && (
                <span className="text-xs text-red-800 font-medium">
                  {errors.acceptTerms.message}
                </span>
              )}
            </Column>
          )}
        />
      </Column>
      <Column className="mt-5 gap-4">
        <Button
          type="submit"
          className="hover:cursor-pointer w-full"
          disabled={!isValid || pendingSignUp}
        >
          {pendingSignUp ? (
            <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />
          ) : null}
          Criar Conta
        </Button>
        <Row className="items-center justify-center w-full gap-1">
          <span className="text-sm">Já tem uma conta?</span>
          <Link
            href="/entrar"
            className="flex self-center text-primary hover:underline text-sm font-semibold"
          >
            Entrar
          </Link>
        </Row>
      </Column>
    </form>
  );
};

export default CreateAccountForm;
