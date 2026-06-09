"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";

const PHONE = "5511965992767";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const helpOptions = t.raw("help.options") as string[];
  const deadlineOptions = t.raw("deadline.options") as string[];
  const budgetOptions = t.raw("budget.options") as string[];

  const schema = z.object({
    name: z.string().min(1, t("errors.required")),
    company: z.string().optional(),
    email: z.string().min(1, t("errors.required")).email(t("errors.email")),
    whatsapp: z.string().min(1, t("errors.required")),
    help: z.array(z.string()),
    deadline: z.string().optional(),
    budget: z.string().optional(),
  });

  type FormValues = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      whatsapp: "",
      help: [],
      deadline: "",
      budget: "",
    },
  });

  const help = watch("help");
  const deadline = watch("deadline");
  const budget = watch("budget");

  const toggleHelp = (option: string) =>
    setValue("help", help.includes(option) ? help.filter((o) => o !== option) : [...help, option]);

  const onSubmit = (data: FormValues) => {
    const lines = [
      `*${t("name.label")}:* ${data.name}`,
      data.company && `*${t("company.label")}:* ${data.company}`,
      `*${t("email.label")}:* ${data.email}`,
      `*${t("whatsapp.label")}:* ${data.whatsapp}`,
      data.help.length > 0 && `*${t("help.title")}* ${data.help.join(", ")}`,
      data.deadline && `*${t("deadline.title")}* ${data.deadline}`,
      data.budget && `*${t("budget.title")}* ${data.budget}`,
    ].filter(Boolean);
    const message = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${PHONE}?text=${message}`, "_blank", "noopener");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[47px]" noValidate>
      <div className="flex flex-col gap-[28px]">
        {/* Text inputs */}
        <div className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[20px] sm:flex-row">
            <TextInput
              label={t("name.label")}
              placeholder={t("name.placeholder")}
              error={errors.name?.message}
              {...register("name")}
            />
            <TextInput
              label={t("company.label")}
              placeholder={t("company.placeholder")}
              {...register("company")}
            />
          </div>
          <div className="flex flex-col gap-[20px] sm:flex-row">
            <TextInput
              label={t("email.label")}
              type="email"
              placeholder={t("email.placeholder")}
              error={errors.email?.message}
              {...register("email")}
            />
            <TextInput
              label={t("whatsapp.label")}
              placeholder={t("whatsapp.placeholder")}
              error={errors.whatsapp?.message}
              {...register("whatsapp")}
            />
          </div>
        </div>

        {/* Choice groups */}
        <div className="flex flex-col gap-[38px]">
          <Group title={t("help.title")}>
            <div className="grid grid-cols-1 gap-[24px] sm:grid-cols-2">
              {helpOptions.map((option) => (
                <Choice
                  key={option}
                  type="checkbox"
                  label={option}
                  checked={help.includes(option)}
                  onClick={() => toggleHelp(option)}
                />
              ))}
            </div>
          </Group>

          <Group title={t("deadline.title")}>
            <div className="grid grid-cols-1 gap-[24px] sm:grid-cols-2">
              {deadlineOptions.map((option) => (
                <Choice
                  key={option}
                  type="radio"
                  label={option}
                  checked={deadline === option}
                  onClick={() => setValue("deadline", option)}
                />
              ))}
            </div>
          </Group>

          <Group title={t("budget.title")}>
            <div className="flex flex-wrap gap-[6px]">
              {budgetOptions.map((option) => {
                const selected = budget === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setValue("budget", option)}
                    className={cn(
                      "rounded-[40px] border border-solid px-[18px] py-[14px] font-text text-[14px] leading-[1.45] transition-colors",
                      selected
                        ? "border-brand-primary bg-brand-primary/5 text-gray-950"
                        : "border-gray-300 text-gray-500 hover:border-gray-400",
                    )}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </Group>
        </div>
      </div>

      <button type="submit" className="group flex w-fit items-center gap-1">
        <span className="rounded-full bg-gray-950 px-[18px] py-[15px] font-text text-[14px] font-bold leading-none text-gray-50 transition-colors group-hover:bg-gray-800">
          {t("submit")}
        </span>
        <span className="grid size-10 place-items-center rounded-full bg-gray-950 text-white transition-colors group-hover:bg-gray-800">
          <ArrowUpRight className="size-6" strokeWidth={1.5} />
        </span>
      </button>
    </form>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-[16px]">
      <p className="font-text text-[18px] font-semibold leading-normal text-gray-950">{title}</p>
      {children}
    </div>
  );
}

type TextInputProps = React.ComponentProps<"input"> & {
  label: string;
  error?: string;
};

function TextInput({ label, error, className, ...props }: TextInputProps) {
  return (
    <label className="flex flex-1 flex-col gap-[6px]">
      <span className="font-text text-[14px] leading-[1.45] text-gray-950">{label}</span>
      <input
        {...props}
        className={cn(
          "w-full rounded-[4px] border border-solid border-gray-300 px-[14px] py-[16px] font-text text-[14px] leading-[1.45] text-gray-950 outline-none placeholder:text-gray-500 focus:border-gray-950",
          error && "border-red-400 focus:border-red-500",
          className,
        )}
      />
      {error && <span className="font-text text-[12px] leading-[1.45] text-red-500">{error}</span>}
    </label>
  );
}

function Choice({
  type,
  label,
  checked,
  onClick,
}: {
  type: "checkbox" | "radio";
  label: string;
  checked: boolean;
  onClick: () => void;
}) {
  return (
    <button type="button" onClick={onClick} className="flex items-center gap-[12px] text-left">
      <span
        className={cn(
          "grid size-[18px] shrink-0 place-items-center border-[0.906px] border-solid transition-colors",
          type === "checkbox" ? "rounded-[3.625px]" : "rounded-full",
          checked ? "border-brand-primary bg-brand-primary" : "border-gray-300 bg-gray-50",
        )}
      >
        {checked &&
          (type === "checkbox" ? (
            <Check className="size-3 text-white" strokeWidth={3} />
          ) : (
            <span className="size-[8px] rounded-full bg-white" />
          ))}
      </span>
      <span className="font-text text-[16px] leading-[1.38] text-gray-500">{label}</span>
    </button>
  );
}
