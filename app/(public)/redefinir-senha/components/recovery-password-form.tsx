"use client";

import { recoveryPassword } from "@/app/(public)/redefinir-senha/services/recovery-password";
import Button from "@/components/core/button";
import Column from "@/components/core/column";
import Input from "@/components/core/input";
import Label from "@/components/core/label";
import { createClient } from "@/libs/supabase/client";
import { supabaseErrorsTranslator } from "@/utils/supabase-errors-translator";
import { toast } from "@/utils/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2Icon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const recoveryPasswordSchema = z.object({
  email: z
    .string()
    .email("E-mail inválido")
    .min(1, "O campo email é obrigatório."),
});

type RecoveryPasswordSchemaType = z.infer<typeof recoveryPasswordSchema>;

const RecoveryPasswordForm = () => {
  const searchParams = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RecoveryPasswordSchemaType>({
    resolver: zodResolver(recoveryPasswordSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const { mutate: doRecoveryPassword, isPending: pendingDoRecoveryPassword } =
    useMutation({
      mutationFn: recoveryPassword,
      onSuccess: (result) => {
        if (result.success) {
          toast.success("E-mail enviado com sucesso!");
        } else {
          toast.error(supabaseErrorsTranslator(result.error));
        }
      },
    });

  const handleRecoveryPassword = (data: RecoveryPasswordSchemaType) => {
    doRecoveryPassword(data);
  };

  useEffect(() => {
    const error = searchParams.get("error");
    if (error === "invalid_token") {
      toast.error(
        "Link de recuperação inválido ou expirado. Aguarde alguns instantes e solicite um novo.",
      );

      const supabase = createClient();
      supabase.auth.signOut();
    }
  }, [searchParams]);

  return (
    <form
      onSubmit={handleSubmit(handleRecoveryPassword)}
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
          disabled={pendingDoRecoveryPassword}
          {...register("email")}
        />
        {errors.email && (
          <span className="text-xs text-red-800 font-medium">
            {errors.email.message}
          </span>
        )}
      </Column>
      <Column className="mt-5 gap-4">
        <Button
          type="submit"
          className="hover:cursor-pointer w-full"
          disabled={!isValid || pendingDoRecoveryPassword}
        >
          {pendingDoRecoveryPassword ? (
            <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />
          ) : null}
          Enviar instruções
        </Button>
        <Link
          href="/entrar"
          className="flex self-center text-primary hover:underline text-sm font-semibold"
        >
          Voltar ao Login
        </Link>
      </Column>
    </form>
  );
};

export default RecoveryPasswordForm;
