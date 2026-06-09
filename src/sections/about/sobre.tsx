import { getTranslations } from "next-intl/server";

import { CtaButton } from "@/components/cta-button";

export async function AboutSobre() {
  const t = await getTranslations();

  return (
    <section className="px-[18px] pt-[46px] pb-14 lg:px-0">
      <div className="container flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
        <span className="shrink-0 py-1 font-title text-[14px] font-semibold uppercase leading-[1.34] text-gray-700">
          {t("about.sobre.eyebrow")}
        </span>

        <div className="flex flex-col gap-[31px] lg:shrink-0">
          <div className="flex flex-col gap-[14px] lg:w-[448px]">
            <h2 className="font-title text-[28px] font-semibold leading-normal text-gray-950 lg:text-[32px]">
              {t.rich("about.sobre.title", {
                reg: (chunks) => <span className="text-[20px] lg:text-[22px]">{chunks}</span>,
              })}
            </h2>
            <p className="font-text text-[16px] leading-[1.38] text-gray-700">
              {t("about.sobre.paragraph")}
            </p>
          </div>
          <CtaButton label={t("about.sobre.cta")} />
        </div>
      </div>
    </section>
  );
}
