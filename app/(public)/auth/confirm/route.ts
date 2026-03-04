import { createServer } from "@/libs/supabase/server";
import { EmailOtpType } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/";

  const baseURL = process.env.NEXT_PUBLIC_SITE_URL || request.nextUrl.origin;
  const redirectTo = new URL(next, baseURL);

  if (tokenHash && type) {
    const supabase = await createServer();
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash: tokenHash,
    });
    if (!error) {
      return NextResponse.redirect(redirectTo);
    }
  }

  const resetUrl = new URL("/redefinir-senha", baseURL);
  resetUrl.searchParams.set("error", "invalid_token");
  return NextResponse.redirect(resetUrl);
}
