import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";

import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL("https://dellub.com"),
  alternates: {
    canonical: "/pt-BR",
    languages: {
      "pt-BR": "/pt-BR",
      en: "/en",
    },
  },
  openGraph: {
    images: "/og-image.png",
  },
  twitter: {
    card: "summary_large_image",
    images: "/twitter-image.png",
  },
  title: "Dellub - Design e desenvolvimento de produtos digitais",
  description: "Design e desenvolvimento de produtos digitais",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} className={cn(inter.variable, raleway.variable, "scroll-smooth")}>
      <GoogleTagManager gtmId="GTM-NDMKWNP4" />
      <body className="antialiased">
        <NextIntlClientProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
