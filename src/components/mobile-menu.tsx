"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { createPortal } from "react-dom";

import { Switch } from "@/components/switch";
import { Link } from "@/i18n/navigation";

type MobileMenuProps = {
  variant?: "overlay" | "solid";
};

export function MobileMenu({ variant = "overlay" }: MobileMenuProps) {
  const t = useTranslations();
  const [open, setOpen] = useState(false);

  const nav = [
    { title: t("header.nav.home"), link: "/" },
    { title: t("header.nav.about"), link: "/about" },
    { title: t("header.nav.contact"), link: "/contact" },
  ];

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="Abrir menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className={
          variant === "solid" ? "flex items-center text-gray-950" : "flex items-center text-white"
        }
      >
        <Menu className="size-7" strokeWidth={1.75} />
      </button>

      {open &&
        createPortal(
          <div className="fixed inset-0 z-50 flex flex-col bg-gray-950 px-[18px] py-6">
            <div className="flex items-center justify-between">
              <Image
                src="/brand/logo.svg"
                alt="Logo Dellub"
                width={83}
                height={23}
                className="h-auto w-[71px]"
              />
              <button
                type="button"
                aria-label="Fechar menu"
                onClick={() => setOpen(false)}
                className="flex items-center text-white"
              >
                <X className="size-7" strokeWidth={1.75} />
              </button>
            </div>

            <nav className="mt-16 flex flex-col gap-8">
              {nav.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className="font-title text-3xl font-semibold text-white"
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            <div className="mt-auto">
              <Switch />
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}
