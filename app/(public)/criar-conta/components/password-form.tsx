"use client";

import { newPassword } from "@/app/(public)/criar-senha/services/new-password";
import Button from "@/components/core/button";
import Column from "@/components/core/column";
import Input from "@/components/core/input";
import Label from "@/components/core/label";
import { supabaseErrorsTranslator } from "@/utils/supabase-errors-translator";
import { toast } from "@/utils/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const passwordFormSchema = z
  .object({
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z
      .string()
      .min(1, "O campo confirmar senha é obrigatório."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type PasswordFormSchemaType = z.infer<typeof passwordFormSchema>;

const PasswordForm = () => {
  const router = useRouter();

  const [isInviteFlow] = useState(() => {
    if (typeof document === "undefined") return false;
    return document.cookie
      .split(";")
      .some((cookie) => cookie.trim().startsWith("invite_mode=true"));
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PasswordFormSchemaType>({
    resolver: zodResolver(passwordFormSchema),
    mode: "onChange",
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const { mutate: doCreateNewPassword, isPending: pendingCreateNewPassword } =
    useMutation({
      mutationFn: newPassword,
      onSuccess: async (result) => {
        if (result?.success) {
          toast.success(
            isInviteFlow
              ? "Senha criada com sucesso!"
              : "Senha alterada com sucesso!",
          );
          router.push("/entrar");
        } else {
          toast.error(supabaseErrorsTranslator(result.error));
        }
      },
    });

  const handleCreateNewPassword = ({ password }: PasswordFormSchemaType) => {
    doCreateNewPassword({ password });
  };

  return (
    <form
      onSubmit={handleSubmit(handleCreateNewPassword)}
      className="flex flex-col gap-4 w-full"
    >
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
          disabled={pendingCreateNewPassword}
          {...register("password")}
        />
        {errors.password && (
          <span className="text-xs text-destructive font-medium">
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
          disabled={pendingCreateNewPassword}
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span className="text-xs text-destructive font-medium">
            {errors.confirmPassword.message}
          </span>
        )}
      </Column>
      <Column className="mt-5">
        <Button
          type="submit"
          className="hover:cursor-pointer w-full"
          disabled={!isValid || pendingCreateNewPassword}
        >
          {pendingCreateNewPassword && (
            <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />
          )}
          {isInviteFlow ? "Criar Senha" : "Alterar Senha"}
        </Button>
      </Column>
    </form>
  );
};

export default PasswordForm;
