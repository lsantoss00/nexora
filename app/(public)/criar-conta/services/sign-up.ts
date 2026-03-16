"use server";

import { createServer } from "@/libs/supabase/server";

interface SignUpProps {
  name: string;
  email: string;
  password: string;
}

export async function signUp({ name, email, password }: SignUpProps) {
  const supabase = await createServer();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        display_name: name,
      },
    },
  });

  if (error)
    return {
      success: false,
      error: { code: error.code, message: error.message },
    };

  await supabase.auth.signOut();

  return { success: true };
}
