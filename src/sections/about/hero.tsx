import { CodeXml, Rocket, Spline } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export async function AboutHero() {
  const t = await getTranslations();

  const socials = [
    {
      src: "/icons/icon-behance.svg",
      link: "https://www.behance.net/agenciadellub",
    },
    {
      src: "/icons/icon-dribbble.svg",
      link: "https://dribbble.com/agenciadellub",
    },
    {
      src: "/icons/icon-linkedin-square.svg",
      link: "https://www.linkedin.com/company/agenciadellub",
    },
    {
      src: "/icons/icon-instagram-square.svg",
      link: "https://instagram.com/agenciadellub",
    },
  ];

  return (
    <section className="pt-[56px] lg:pt-[117px]">
      <div className="container flex flex-col gap-6 px-[18px] lg:flex-row lg:items-center lg:justify-between lg:gap-[277px] lg:px-0">
        <div className="flex flex-col gap-[18px] lg:gap-[15px]">
          <span className="max-w-[224px] font-title text-[14px] font-semibold uppercase leading-[1.34] text-gray-700 lg:max-w-none">
            {t("about.hero.label")}
          </span>
          <h1 className="font-title text-[24px] font-semibold leading-normal text-gray-950 lg:max-w-[707px] lg:text-[32px]">
            {t("about.hero.title")}
          </h1>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {socials.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              target="_blank"
              className="group flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border border-gray-100 duration-500 hover:border-gray-200 hover:bg-gray-100"
            >
              <Image src={item.src} alt="Ícone Ilustrativo Social Network" width={24} height={24} />
            </Link>
          ))}
        </div>
      </div>

      <div className="container mt-6 px-[18px] lg:mt-[50px] lg:px-0">
        <div className="flex h-[202px] items-center justify-center gap-[14px] bg-gray-950 lg:h-[349px]">
          <CodeXml className="size-7 text-white" strokeWidth={1.5} />
          <Spline className="size-7 text-white" strokeWidth={1.5} />
          <Rocket className="size-7 text-white" strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
}
