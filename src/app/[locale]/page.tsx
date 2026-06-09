import { setRequestLocale } from "next-intl/server";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Agency } from "@/sections/agency";
import { Faq } from "@/sections/faq";
import { Hero } from "@/sections/hero";
import { Process } from "@/sections/process";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main className="flex flex-col items-stretch">
        <Hero />
        <Agency />
        <Process />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
