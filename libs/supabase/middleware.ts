import { createServer } from "@/libs/supabase/server";
import { NextResponse, type NextRequest } from "next/server";

const PRIVATE_ROUTES = ["/perfil"];

export async function updateSession(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const hasErrorParam = request.nextUrl.searchParams.has("error");
  const isRecoveryFlow =
    request.nextUrl.searchParams.get("type") === "recovery";
  const cookieRecovery = request.cookies.get("recovery_mode")?.value === "true";

  const supabaseResponse = NextResponse.next({ request });

  const supabase = await createServer();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isPrivateRoute = PRIVATE_ROUTES.some((route) =>
    pathname.startsWith(route),
  );

  if (isRecoveryFlow) {
    supabaseResponse.cookies.set("recovery_mode", "true", {
      sameSite: "lax",
      path: "/",
    });
  }

  if (isPrivateRoute) {
    if (!user) {
      const url = request.nextUrl.clone();
      url.pathname = "/entrar";
      return NextResponse.redirect(url);
    }
  }

  if (pathname === "/") {
    const url = request.nextUrl.clone();
    if (user) {
      url.pathname = "/usuarios";
    } else {
      url.pathname = "/entrar";
    }
    return NextResponse.redirect(url);
  }

  if (
    user &&
    (isRecoveryFlow || cookieRecovery) &&
    pathname !== "/criar-senha"
  ) {
    const url = request.nextUrl.clone();
    url.pathname = "/criar-senha";
    url.search = "";
    return NextResponse.redirect(url);
  }

  if (user && pathname === "/entrar") {
    const url = request.nextUrl.clone();
    url.pathname = "/usuarios";
    url.search = "";
    return NextResponse.redirect(url);
  }

  if (user && pathname === "/redefinir-senha") {
    if (hasErrorParam) return supabaseResponse;
    const url = request.nextUrl.clone();
    url.pathname = "/usuarios";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}
