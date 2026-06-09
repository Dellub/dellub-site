import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

const socials = [
  { src: "/icons/icon-behance.svg", link: "https://www.behance.net/agenciadellub" },
  { src: "/icons/icon-dribbble.svg", link: "https://dribbble.com/agenciadellub" },
  {
    src: "/icons/icon-linkedin-square.svg",
    link: "https://www.linkedin.com/company/agenciadellub",
  },
  { src: "/icons/icon-instagram-square.svg", link: "https://instagram.com/agenciadellub" },
];

export async function ContactTop() {
  const t = await getTranslations();

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col gap-[15px]">
        <span className="font-title text-[14px] font-semibold uppercase leading-[1.34] text-gray-50">
          {t("contact.label")}
        </span>
        <h1 className="font-title text-[24px] font-semibold leading-normal text-white lg:max-w-[577px] lg:text-[32px]">
          {t("contact.heading")}
        </h1>
      </div>
      <div className="flex shrink-0 items-center gap-2">
        {socials.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            target="_blank"
            className="group flex size-[3.25rem] items-center justify-center rounded-full border border-solid border-white/40 duration-500 hover:bg-white/10"
          >
            <Image
              src={item.src}
              alt="Ícone Ilustrativo Social Network"
              width={24}
              height={24}
              className="brightness-0 invert"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
