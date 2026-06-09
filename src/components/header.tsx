import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./mobile-menu";

type HeaderProps = {
  variant?: "overlay" | "solid";
};

export async function Header({ variant = "overlay" }: HeaderProps) {
  const t = await getTranslations();
  const solid = variant === "solid";

  const nav = [
    {
      title: t("header.nav.home"),
      link: "/",
    },
    {
      title: t("header.nav.about"),
      link: "/about",
    },
    {
      title: t("header.nav.contact"),
      link: "/contact",
    },
  ];

  const linkColor = solid
    ? "after:text-gray-950/50 before:text-gray-950"
    : "after:text-white/50 before:text-white";

  return (
    <header
      id="header"
      className={cn(
        "left-0 right-0 top-0 border-b border-solid",
        solid
          ? "relative border-b-[#f9fafb] bg-white"
          : "absolute z-40 border-b-white/10 backdrop-blur-sm",
      )}
    >
      <div className="container flex items-center justify-between px-4 py-6 lg:px-0">
        <Link href="/">
          <Image
            src={solid ? "/brand/logo-dark.svg" : "/brand/logo.svg"}
            alt="Logo Dellub"
            width={83}
            height={23}
            className="h-auto w-[71px] lg:w-[83px]"
          />
        </Link>

        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-9">
            {nav?.map((item) => (
              <li key={item.link} className="overflow-y-hidden h-5">
                <Link
                  href={item.link}
                  className={cn(
                    "relative after:absolute after:left-0 after:top-0 after:font-text after:block after:duration-500 after:translate-y-full after:content-[attr(data-text)] after:text-sm before:left-0 before:top-0 before:font-text before:block before:duration-500 before:relative before:translate-y-0 before:content-[attr(data-text)] before:text-sm hover:after:translate-y-0 hover:before:-translate-y-full",
                    linkColor,
                  )}
                  data-text={item.title}
                  replace
                ></Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu variant={variant} />
      </div>
    </header>
  );
}
