"use server";

import { createServer } from "@/libs/supabase/server";

interface SignInProps {
  email: string;
  password: string;
}

export async function signIn({ email, password }: SignInProps) {
  const supabase = await createServer();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return {
      success: false,
      error: { code: error.code, message: error.message },
    };
  }

  return { success: true };
}
