import Image from "next/image";
import { getTranslations } from "next-intl/server";

const UNITS = ["a", "b", "c", "d"];

function MarqueeRow({ text, direction }: { text: string; direction: "left" | "right" }) {
  const animation =
    direction === "left"
      ? "animate-[marquee-left_40s_linear_infinite]"
      : "animate-[marquee-right_40s_linear_infinite]";

  const set = (
    <div className="flex shrink-0 items-center gap-[20px] pr-[20px] lg:gap-[34px] lg:pr-[34px]">
      {UNITS.map((u) => (
        <div key={u} className="flex shrink-0 items-center gap-[9px] lg:gap-[14px]">
          <Image
            src="/images/img-hero.webp"
            alt=""
            width={151}
            height={74}
            className="h-[37px] w-[77px] object-contain lg:h-[74px] lg:w-[151px]"
          />
          <span className="whitespace-nowrap font-title text-[27px] font-semibold leading-none text-gray-950 lg:text-[81px]">
            {text}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className={`flex w-max ${animation}`}>
      {set}
      {set}
    </div>
  );
}

export async function Marquee() {
  const t = await getTranslations();
  const text = t("about.marquee");

  return (
    <div
      className="flex h-[96px] flex-col justify-between overflow-hidden bg-white py-[8px] lg:h-[360px] lg:py-[60px]"
      aria-hidden="true"
    >
      <MarqueeRow text={text} direction="left" />
      <MarqueeRow text={text} direction="right" />
    </div>
  );
}
