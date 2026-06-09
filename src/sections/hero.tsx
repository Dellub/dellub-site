import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Button } from "@/components/button";

export async function Hero() {
  const t = await getTranslations();

  return (
    <section className="bg-[url('/images/bg-hero.webp')] bg-cover bg-no-repeat">
      {/* Mobile */}
      <div className="flex min-h-[769px] flex-col px-[18px] pt-[161px] pb-[34px] lg:hidden">
        <h1 className="font-title text-[42px] font-semibold leading-tight text-white">
          {t("home.hero.title")}
        </h1>
        <div className="mt-9 flex flex-col gap-7">
          <Image
            src="/images/img-hero.webp"
            alt="Imagem ilustrativa"
            width={77}
            height={38}
            className="h-auto w-[77px]"
          />
          <div className="flex flex-col gap-2">
            <span className="font-text text-[16px] font-bold leading-normal text-white">
              {t("home.hero.content.text")}
            </span>
            <span className="font-text text-[16px] leading-[1.38] text-gray-200">
              {t("home.hero.content.paragraph")}
            </span>
          </div>
        </div>
        <div className="mt-12 flex justify-end">
          <Button />
        </div>
        <div className="group mt-auto flex items-center gap-[5px] pt-10">
          <Image
            src="/icons/icon-mouse-scroll.svg"
            alt="Ícone ilustrativo Mouse Scroll"
            width={34}
            height={34}
            className="group-hover:animate-bounce"
          />
          <span className="font-text text-[12px] leading-[1.45] text-gray-50">
            Role e sinta a experiência
          </span>
        </div>
      </div>

      {/* Desktop */}
      <div className="container hidden flex-col pt-[12.375rem] pb-[3.75rem] lg:flex">
        <h1 className="font-title text-white text-[4.75rem] leading-[5.938rem] font-semibold max-w-[22ch] w-full">
          {t("home.hero.title")}
        </h1>
        <div className="flex justify-end gap-7 mt-[5.813rem]">
          <Image
            src="/images/img-hero.webp"
            alt="Imagem ilustrativa"
            width={111}
            height={100}
            className="object-contain h-fit"
          />
          <div className="flex flex-col justify-start w-fit">
            <span className="font-text font-bold text-2xl text-white leading-7">
              {t("home.hero.content.text")}
            </span>
            <span className="max-w-[38ch] w-full mt-3 mb-[3.688rem] font-text text-lg text-white leading-[1.375rem]">
              {t("home.hero.content.paragraph")}
            </span>
            <Button />
          </div>
        </div>
        <div className="group flex gap-[0.313rem] items-center">
          <Image
            src="/icons/icon-mouse-scroll.svg"
            alt="Ícone ilustrativo Mouse Scroll"
            width={37}
            height={37}
            className="group-hover:animate-bounce"
          />
          <span className="font-text text-sm text-gray-100">Role e sinta a experiência</span>
        </div>
      </div>
    </section>
  );
}
