import type { APIRoute } from "astro";

const AUTH_COOKIE = "pl_auth";

export const prerender = false;

export const POST: APIRoute = ({ cookies }) => {
  cookies.set(AUTH_COOKIE, "1", {
    path: "/",
    maxAge: 60 * 60 * 24,
    sameSite: "lax",
    httpOnly: true,
  });

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};

export const DELETE: APIRoute = ({ cookies }) => {
  cookies.delete(AUTH_COOKIE, {
    path: "/",
  });

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};
