import 'es-module-lexer';
import './chunks/astro-designed-error-pages_F4zYEPjN.mjs';
import 'kleur/colors';
import './chunks/astro/server_akqI5NS5.mjs';
import 'clsx';
import 'cookie';
import { s as sequence } from './chunks/index_Ck3BaoUI.mjs';

const AUTH_COOKIE = "pl_auth";
const onRequest$1 = async (context, next) => {
  const { pathname } = context.url;
  if (pathname.startsWith("/dashboard")) {
    const authCookie = context.cookies.get(AUTH_COOKIE)?.value;
    if (authCookie !== "1") {
      return context.redirect("/login");
    }
  }
  return next();
};

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
