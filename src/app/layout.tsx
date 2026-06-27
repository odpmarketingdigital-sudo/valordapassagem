import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = createPageMetadata({
  title: SITE.name,
  description: SITE.description,
  keywords: [
    "passagem ônibus brasil",
    "preço passagem ônibus",
    "valor passagem",
    "ônibus interestadual",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full`}>
      <head>
        <GoogleAnalytics />
        <script
          nowprocket=""
          data-noptimize="1"
          data-cfasync="false"
          data-wpfc-render="false"
          seraph-accel-crit="1"
          data-no-defer="1"
          dangerouslySetInnerHTML={{
            __html: `(function () {
    var script = document.createElement("script");
    script.async = 1;
    script.src = 'https://emrldtp.com/NTQwNTk4.js?t=540598';
    document.head.appendChild(script);
})();`,
          }}
        />
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1 pt-[65px] sm:pt-[73px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
