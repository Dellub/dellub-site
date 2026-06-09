import { ArrowRight, Phone, Play } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function ContactLeft() {
  const t = await getTranslations();

  return (
    <div className="flex w-full flex-col gap-[34px] lg:w-[401px]">
      <div className="flex flex-col gap-[14px]">
        <h2 className="font-title text-[24px] font-bold leading-normal text-gray-950">
          {t("contact.intro.title")}
        </h2>
        <p className="font-text text-[16px] leading-[1.38] text-gray-600">
          {t.rich("contact.intro.text", {
            b: (chunks) => <span className="font-bold text-gray-950">{chunks}</span>,
          })}
        </p>
      </div>

      <div className="h-px w-full bg-gray-200" />

      <div className="flex flex-col gap-[34px]">
        <div className="flex items-center gap-[12px]">
          <span className="grid size-[51px] shrink-0 place-items-center rounded-full bg-brand-primary/10 text-brand-primary">
            <Play className="size-6 fill-current" strokeWidth={0} />
          </span>
          <div className="flex flex-col gap-[6px]">
            <p className="font-text text-[16px] font-bold leading-normal text-gray-950">
              {t("contact.meeting.title")}
            </p>
            <a
              href="https://wa.me/5511965992767"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[5px] font-text text-[14px] leading-[1.45] text-gray-700 hover:text-brand-primary"
            >
              {t("contact.meeting.cta")}
              <ArrowRight className="size-[18px]" strokeWidth={1.75} />
            </a>
          </div>
        </div>

        <div className="flex items-center gap-[12px]">
          <span className="grid size-[51px] shrink-0 place-items-center rounded-full bg-brand-primary/10 text-brand-primary">
            <Phone className="size-6" strokeWidth={1.75} />
          </span>
          <div className="flex flex-col gap-[6px]">
            <p className="font-text text-[16px] font-bold leading-normal text-gray-950">
              {t("contact.message.title")}
            </p>
            <a
              href="https://wa.me/5511965992767"
              target="_blank"
              rel="noopener noreferrer"
              className="font-text text-[14px] leading-[1.45] text-gray-700 hover:text-brand-primary"
            >
              {t("contact.message.phone")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
