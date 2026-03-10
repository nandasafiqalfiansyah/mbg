import type { MiddlewareHandler } from "astro";

const AUTH_COOKIE = "pl_auth";

export const onRequest: MiddlewareHandler = async (context, next) => {
  const { pathname } = context.url;

  if (pathname.startsWith("/dashboard")) {
    const authCookie = context.cookies.get(AUTH_COOKIE)?.value;

    if (authCookie !== "1") {
      return context.redirect("/login");
    }
  }

  return next();
};
