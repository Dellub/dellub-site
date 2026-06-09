import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { AboutFounders } from "@/sections/about/founders";
import { AboutHero } from "@/sections/about/hero";
import { AboutJoin } from "@/sections/about/join";
import { Marquee } from "@/sections/about/marquee";
import { AboutSobre } from "@/sections/about/sobre";
import { Faq } from "@/sections/faq";

export const metadata: Metadata = {
  title: "Sobre nós - Dellub",
  description: "Conheça a Dellub: design e desenvolvimento de produtos digitais.",
};

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header variant="solid" />
      <main className="flex flex-col items-stretch">
        <AboutHero />
        <Marquee />
        <AboutSobre />
        <AboutFounders />
        <AboutJoin />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
