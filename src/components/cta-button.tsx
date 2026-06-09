import { ArrowUpRight } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

type CtaButtonProps = {
  label: string;
  href?: string;
  variant?: "dark" | "light";
};

export function CtaButton({ label, href = "/contact", variant = "dark" }: CtaButtonProps) {
  const light = variant === "light";

  const pill = cn(
    "rounded-full px-[18px] py-[15px] font-text text-[14px] font-bold leading-none transition-colors",
    light
      ? "bg-gray-50 text-gray-950 group-hover:bg-white"
      : "bg-gray-950 text-gray-50 group-hover:bg-gray-800",
  );
  const circle = cn(
    "grid size-10 place-items-center rounded-full transition-colors",
    light
      ? "bg-gray-50 text-gray-950 group-hover:bg-white"
      : "bg-gray-950 text-white group-hover:bg-gray-800",
  );

  const inner = (
    <>
      <span className={pill}>{label}</span>
      <span className={circle}>
        <ArrowUpRight className="size-6" strokeWidth={1.5} />
      </span>
    </>
  );

  if (href.startsWith("mailto:") || href.startsWith("http")) {
    return (
      <a href={href} className="group flex w-fit items-center gap-1">
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className="group flex w-fit items-center gap-1">
      {inner}
    </Link>
  );
}
