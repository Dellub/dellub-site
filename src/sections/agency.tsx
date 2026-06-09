import { CodeXml, Rocket, Spline } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export async function Agency() {
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
      src: "/icons/icon-instagram-square.svg",
      link: "https://instagram.com/agenciadellub",
    },
    {
      src: "/icons/icon-linkedin-square.svg",
      link: "https://www.linkedin.com/company/agenciadellub",
    },
  ];

  const socialLinks = socials.map((item) => (
    <Link
      key={item.link}
      href={item.link}
      target="_blank"
      className="group flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border border-gray-100 duration-500 hover:border-gray-200 hover:bg-gray-100"
    >
      <Image src={item.src} alt="Ícone Ilustrativo Social Network" width={24} height={24} />
    </Link>
  ));

  return (
    <section>
      {/* Mobile */}
      <div className="lg:hidden">
        <div className="flex flex-col gap-3 px-[18px] py-10">
          <h2 className="font-title text-[24px] font-semibold leading-normal text-gray-950">
            {t("home.agency.title")}
          </h2>
          <div className="flex flex-col gap-[14px]">
            <p className="font-text text-[14px] leading-[1.45] text-gray-700">
              {t("home.agency.paragraph1")}
            </p>
            <p className="font-text text-[14px] leading-[1.45] text-gray-700">
              {t("home.agency.paragraph2")}
            </p>
          </div>
        </div>
        <div className="px-[18px]">
          <div className="border-b border-solid border-gray-300 pt-6 pb-8">
            <div className="flex items-center justify-center gap-[14px] bg-gray-950 py-[87px]">
              <CodeXml className="size-7 text-white" strokeWidth={1.5} />
              <Spline className="size-7 text-white" strokeWidth={1.5} />
              <Rocket className="size-7 text-white" strokeWidth={1.5} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 px-[18px] pt-[46px] pb-10">
          <p className="font-text text-[14px] leading-[1.45] text-gray-700">
            {t("home.agency.paragraph3")}
          </p>
          <div className="flex items-center gap-2">{socialLinks}</div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden flex-col gap-14 pt-[6.125rem] pb-28 lg:flex">
        <div className="container flex justify-between">
          <h2 className="font-title font-semibold text-gray-950 text-[2rem] leading-[2.348rem] max-w-[30ch]">
            {t("home.agency.title")}
          </h2>
          <div className="flex flex-col gap-[0.875rem] max-w-[45ch]">
            <p className="font-text text-base leading-[1.38rem] text-gray-700">
              {t("home.agency.paragraph1")}
            </p>
            <p className="font-text text-base leading-[1.38rem] text-gray-700">
              {t("home.agency.paragraph2")}
            </p>
          </div>
        </div>
        <div className="container">
          <Image
            src="/images/section-agency.png"
            alt="Imagem Ilustrativa"
            width={2000}
            height={100}
            className="w-full"
          />
        </div>
        <div className="container flex justify-between items-center">
          <p className="font-text text-base leading-[1.38rem] text-gray-700 max-w-[53ch]">
            {t("home.agency.paragraph3")}
          </p>
          <div className="flex items-center gap-2">{socialLinks}</div>
        </div>
      </div>
    </section>
  );
}
