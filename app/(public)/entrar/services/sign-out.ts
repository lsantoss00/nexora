"use server";

import { createServer } from "@/libs/supabase/server";

export async function signOut() {
  const supabase = await createServer();

  const { error } = await supabase.auth.signOut();

  if (error) {
    return {
      success: false,
      error: { code: error.code, message: error.message },
    };
  }

  return { success: true };
}
