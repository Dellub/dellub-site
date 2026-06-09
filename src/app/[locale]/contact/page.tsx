import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ContactForm } from "@/sections/contact/form";
import { ContactLeft } from "@/sections/contact/left";
import { ContactTop } from "@/sections/contact/top";

export const metadata: Metadata = {
  title: "Contato - Dellub",
  description: "Fale com a Dellub e tire seu projeto digital do papel.",
};

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <section className="relative bg-white pb-[88px]">
          {/* Dark hero band only covers the top — the card straddles into the white below */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[460px] bg-[url('/images/bg-hero.webp')] bg-cover bg-no-repeat lg:h-[629px]" />
          <div className="relative">
            <div className="container px-[18px] pt-[167px] lg:px-0">
              <ContactTop />
            </div>
            <div className="container mt-[53px] px-[18px] lg:px-0">
              <div className="flex flex-col gap-[40px] overflow-hidden rounded-[24px] border border-solid border-gray-100 bg-white px-6 py-10 lg:flex-row lg:gap-[103px] lg:px-[72px] lg:py-[56px]">
                <ContactLeft />
                <div className="flex-1">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer showCta={false} />
    </>
  );
}
