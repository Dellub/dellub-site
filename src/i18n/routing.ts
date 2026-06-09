import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt-BR", "en"],
  defaultLocale: "pt-BR",
  // Static export can't run middleware, so every locale is prefixed
  // (/pt-BR, /en) and the root redirect is handled by public/.htaccess.
  localePrefix: "always",
});
