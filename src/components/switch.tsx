"use client";

import { useLocale } from "next-intl";
import { Fragment } from "react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

const LABELS: Record<string, string> = {
  "pt-BR": "PT-BR",
  en: "EN",
};

export function Switch() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-2 font-text text-sm">
      {routing.locales.map((value, index) => (
        <Fragment key={value}>
          {index > 0 && <span className="text-gray-400">/</span>}
          <button
            type="button"
            onClick={() => router.replace(pathname, { locale: value })}
            aria-current={value === locale ? "true" : undefined}
            className={cn(
              "transition-colors",
              value === locale
                ? "font-semibold text-brand-primary"
                : "text-gray-400 hover:text-gray-600",
            )}
          >
            {LABELS[value] ?? value}
          </button>
        </Fragment>
      ))}
    </div>
  );
}
