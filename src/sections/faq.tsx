"use client";

import { ChevronRight, Minus, Plus } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { cn } from "@/lib/utils";

type FaqItem = {
  question: string;
  answer: string[];
};

function Chevrons() {
  return (
    <span className="hidden items-center text-brand-primary lg:flex" aria-hidden="true">
      <ChevronRight className="size-[14px] -mr-[5px] opacity-40" strokeWidth={2.5} />
      <ChevronRight className="size-[14px] -mr-[5px] opacity-60" strokeWidth={2.5} />
      <ChevronRight className="size-[14px]" strokeWidth={2.5} />
    </span>
  );
}

export function Faq() {
  const t = useTranslations();
  const items = t.raw("home.faq.items") as FaqItem[];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-14 lg:py-28">
      <div className="container flex flex-col items-center gap-[46px] lg:gap-14">
        <h2 className="font-title text-[24px] font-semibold leading-normal text-gray-950 lg:text-[2rem]">
          {t("home.faq.title")}
        </h2>

        <div className="flex w-full flex-col gap-8">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={item.question}
                className="border-b border-solid border-gray-200 px-[18px] pb-6 lg:px-0 lg:pb-8"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="flex min-w-0 flex-1 items-center gap-[10px]">
                    {isOpen && <Chevrons />}
                    <span className="min-w-0 font-text text-[16px] font-semibold leading-normal text-gray-950 lg:text-[18px]">
                      {item.question}
                    </span>
                  </span>
                  <span className="grid size-[28px] shrink-0 place-items-center rounded-full bg-gray-200 text-gray-700 lg:size-[30px]">
                    {isOpen ? (
                      <Minus className="size-4" strokeWidth={2} />
                    ) : (
                      <Plus className="size-4" strokeWidth={2} />
                    )}
                  </span>
                </button>

                <div
                  id={panelId}
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="flex max-w-full flex-col gap-[1.375rem] pt-3 font-text text-[14px] leading-[1.45] text-gray-600 lg:max-w-[1091px] lg:text-[16px] lg:leading-[1.38]">
                      {item.answer.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
