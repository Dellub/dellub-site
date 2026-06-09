import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Switch } from "./switch";

type FooterProps = {
  showCta?: boolean;
};

export async function Footer({ showCta = true }: FooterProps) {
  const t = await getTranslations();

  const nav = [
    {
      title: t("footer.nav.home"),
      link: "/",
    },
    {
      title: t("footer.nav.about"),
      link: "/about",
    },
    {
      title: t("footer.nav.contact"),
      link: "/contact",
    },
  ];

  const socials = [
    {
      title: "instagram",
      link: "https://instagram.com/agenciadellub",
    },
    {
      title: "behance",
      link: "https://www.behance.net/agenciadellub",
    },
    {
      title: "linkedin",
      link: "https://www.linkedin.com/company/agenciadellub",
    },
    {
      title: "dribbble",
      link: "https://dribbble.com/agenciadellub",
    },
  ];

  return (
    <footer className="bg-[url('/images/bg-hero.webp')] bg-cover bg-no-repeat">
      {/* Mobile */}
      <div className={cn("pb-5 lg:hidden", !showCta && "pt-[56px]")}>
        {showCta && (
          <div className="flex flex-col items-center gap-[54px] px-[18px] pt-[78px]">
            <h2 className="max-w-[357px] text-center font-title text-[38px] font-semibold leading-tight text-white">
              {t("footer.title")}
            </h2>
            <Button />
          </div>
        )}
        <div
          className={cn(
            "mx-[18px] flex flex-col items-center rounded-2xl bg-white px-6 pt-[33px] pb-10",
            showCta && "mt-[34px]",
          )}
        >
          <div className="flex flex-col items-center gap-[14px] text-center">
            <h3 className="max-w-[273px] font-title text-[24px] font-bold leading-normal text-gray-950">
              {t("footer.subtitle")}
            </h3>
            <a
              href="mailto:contato@dellub.com"
              className="font-text text-[16px] leading-[1.38] text-gray-500"
            >
              contato@dellub.com
            </a>
          </div>
          <div className="mt-9 flex gap-[56px]">
            <div className="flex flex-col gap-[26px]">
              <h4 className="font-text text-[16px] font-semibold leading-normal text-gray-950">
                {t("footer.nav.title")}
              </h4>
              <nav>
                <ul className="flex flex-col gap-[18px]">
                  {nav.map((item) => (
                    <li key={item.link} className="flex">
                      <Link
                        href={item.link}
                        className="font-text text-[14px] leading-[1.45] text-gray-700 hover:text-brand-primary"
                        replace
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex flex-col gap-[26px]">
              <h4 className="font-text text-[16px] font-semibold leading-normal text-gray-950">
                {t("footer.nav.social")}
              </h4>
              <nav>
                <ul className="flex flex-col gap-[24px]">
                  {socials.map((item) => (
                    <li key={item.link} className="flex">
                      <Link
                        href={item.link}
                        target="_blank"
                        className="flex items-center gap-2 font-text text-[14px] capitalize leading-[1.45] text-gray-700 hover:text-brand-primary"
                      >
                        <Image
                          src={`/icons/icon-${item.title}-square.svg`}
                          alt={`Ícone Ilustrativo Social ${item.title}`}
                          width={24}
                          height={24}
                        />
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center gap-3 text-center">
            <span className="font-text text-[14px] leading-[1.45] text-gray-500">
              {t("footer.copywriting")}
            </span>
            <span className="font-text text-[14px] font-bold leading-normal text-gray-500">
              {t("footer.design")} <span className="text-gray-950">Amanda Merien</span>
            </span>
            <div className="mt-2">
              <Switch />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden flex-col gap-[4.905rem] pt-[6.411rem] pb-[2.563rem] lg:flex">
        {showCta && (
          <div className="container flex flex-col items-center gap-10">
            <h2 className="font-title text-white text-center font-semibold text-6xl leading-[4.403rem] max-w-[15ch] w-full">
              {t("footer.title")}
            </h2>
            <Button />
          </div>
        )}
        <div className="container relative rounded-3xl pt-14 pr-[6.875rem] pb-48 pl-[4.5rem] bg-white flex justify-between items-start">
          <a href="#header" className="flex items-center gap-[0.688rem] absolute bottom-8 right-7">
            {t("footer.backToTop")}
            <Image
              src="/icons/icon-arrow-top-primary.svg"
              alt="Ícone Ilustrativo Arrow Top"
              height={24}
              width={24}
            />
          </a>
          <Image
            src="/images/img-footer.webp"
            alt="Imagem Ilustrativa Logo Dellub"
            width={739}
            height={100}
            className="h-fit absolute bottom-0 left-1/2 -translate-x-1/2"
          />
          <div className="flex flex-col">
            <h3 className="font-title text-gray-950 font-bold text-2xl leading-[1.761rem] max-w-[20ch] w-full mb-8">
              {t("footer.subtitle")}
            </h3>
            <a
              href="mailto:contato@dellub.com"
              target="_blank"
              className="font-text text-gray-500 text-base leading-[1.38rem]"
              rel="noopener"
            >
              contato@dellub.com
            </a>
            <span className="font-text text-gray-500 text-base leading-[1.38rem] mt-4 mb-4">
              {t("footer.copywriting")}
            </span>
            <span className="font-text font-bold text-gray-500 text-sm leading-[1.059rem]">
              {t("footer.design")} <span className="text-gray-950">Amanda Merien</span>
            </span>
            <div className="mt-6">
              <Switch />
            </div>
          </div>
          <div className="flex gap-[5.375rem]">
            <div className="flex flex-col gap-6">
              <h4 className="font-text font-semibold text-lg text-gray-950 leading-[1.361rem]">
                {t("footer.nav.title")}
              </h4>
              <nav className="flex">
                <ul className="flex flex-col gap-4">
                  {nav?.map((item) => (
                    <li key={item.link} className="flex">
                      <Link
                        href={item.link}
                        className="font-text text-sm leading-6 text-gray-700 hover:text-brand-primary"
                        replace
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="font-text font-semibold text-lg text-gray-950 leading-[1.361rem]">
                {t("footer.nav.social")}
              </h4>
              <nav className="flex">
                <ul className="flex flex-col gap-4">
                  {socials?.map((item) => (
                    <li key={item.link} className="flex">
                      <Link
                        href={item.link}
                        className="font-text text-sm capitalize leading-6 text-gray-700 hover:text-brand-primary flex item-center gap-2"
                        target="_blank"
                      >
                        <Image
                          src={`/icons/icon-${item.title}-square.svg`}
                          alt={`Ícone Ilustrativo Social ${item.title}`}
                          width={24}
                          height={24}
                        />
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
