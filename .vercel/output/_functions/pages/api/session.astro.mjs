export { renderers } from '../../renderers.mjs';

const AUTH_COOKIE = "pl_auth";
const prerender = false;
const POST = ({ cookies }) => {
  cookies.set(AUTH_COOKIE, "1", {
    path: "/",
    maxAge: 60 * 60 * 24,
    sameSite: "lax",
    httpOnly: true
  });
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "content-type": "application/json"
    }
  });
};
const DELETE = ({ cookies }) => {
  cookies.delete(AUTH_COOKIE, {
    path: "/"
  });
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      "content-type": "application/json"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  DELETE,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
