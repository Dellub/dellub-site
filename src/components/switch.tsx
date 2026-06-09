"use client";

import { useLocale } from "next-intl";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const LABELS: Record<string, string> = {
  "pt-BR": "BR",
  en: "EN",
};

export function Switch() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-1">
      {routing.locales.map((value) => (
        <Button
          key={value}
          type="button"
          size="sm"
          variant={value === locale ? "default" : "ghost"}
          onClick={() => router.replace(pathname, { locale: value })}
        >
          {LABELS[value] ?? value}
        </Button>
      ))}
    </div>
  );
}
