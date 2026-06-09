import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

import { Link } from "@/i18n/navigation";

type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export async function Process() {
  const t = await getTranslations();
  const steps = t.raw("home.process.steps") as ProcessStep[];

  return (
    <section className="bg-gray-950">
      <div className="container flex flex-col items-start gap-[46px] px-[18px] py-14 lg:gap-[86px] lg:px-0 lg:py-24">
        <header className="flex w-full flex-col gap-6 lg:flex-row lg:gap-0">
          <div className="pt-1 lg:w-[452px] lg:shrink-0 lg:pt-2">
            <span className="font-title text-[14px] font-semibold uppercase leading-[1.34] text-[#c16fff]">
              {t("home.process.eyebrow")}
            </span>
          </div>
          <h2 className="font-title text-[24px] font-semibold leading-normal text-white lg:max-w-[485px] lg:text-[2rem]">
            {t("home.process.title")}
          </h2>
        </header>

        <div className="flex w-full flex-col gap-6 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex w-full flex-col gap-6 border-b border-solid border-white/10 pb-6 lg:flex-row lg:items-center lg:gap-[400px]"
            >
              <span className="w-[52px] shrink-0 font-title text-[28px] font-semibold leading-normal text-gray-400">
                {step.number}
              </span>
              <div className="flex w-full flex-col gap-2 lg:max-w-[649px] lg:flex-1">
                <h3 className="font-title text-[22px] font-semibold leading-normal text-white lg:text-[24px] lg:font-bold">
                  {step.title}
                </h3>
                <p className="font-text text-[14px] leading-[1.45] text-gray-400 lg:text-[16px] lg:leading-[1.38]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <p className="font-text text-[14px] leading-[1.45] text-gray-400 lg:max-w-[680px] lg:text-[16px] lg:leading-[1.38]">
            {t("home.process.footer")}
          </p>
          <Link
            href="/contact"
            className="flex shrink-0 items-center gap-2 font-text text-[16px] leading-[1.38] text-gray-50 transition-opacity hover:opacity-80"
          >
            {t("home.process.cta")}
            <ArrowUpRight className="size-6" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
