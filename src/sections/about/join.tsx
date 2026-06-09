import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { CtaButton } from "@/components/cta-button";

export async function AboutJoin() {
  const t = await getTranslations();
  const paragraphs = t.raw("about.join.paragraphs") as string[];

  return (
    <section className="bg-gray-950 pt-[56px] lg:pt-[87px]">
      <div className="container px-[18px] lg:px-0">
        <div className="mx-auto flex w-full flex-col items-center gap-[31px] text-center lg:w-[511px]">
          <div className="flex flex-col gap-[14px]">
            <h2 className="whitespace-pre-line font-title text-[28px] font-semibold leading-normal text-gray-50 lg:text-[38px]">
              {t("about.join.title")}
            </h2>
            <div className="flex flex-col gap-[22px] font-text text-[16px] leading-[1.38] text-gray-50">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <CtaButton label={t("about.join.cta")} href="mailto:contato@dellub.com" variant="light" />
        </div>
      </div>

      <div className="container relative z-10 mt-[60px] -mb-[50px] px-[18px] lg:mt-[119px] lg:-mb-[80px] lg:px-0">
        <div className="relative h-[160px] overflow-hidden rounded-[14px] bg-gray-950 lg:h-[229px]">
          <Image src="/images/bg-hero.webp" alt="" fill sizes="100vw" className="object-cover" />
          <Image
            src="/brand/logo.svg"
            alt="dellub"
            width={739}
            height={205}
            className="absolute left-1/2 top-[64px] w-[440px] max-w-none -translate-x-1/2 lg:top-[106px] lg:w-[739px]"
          />
        </div>
      </div>
    </section>
  );
}
