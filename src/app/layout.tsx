import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/lib/providers";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tech-nest-web-gamma.vercel.app"),
  title: {
    default: "Tech Nest — Réussir le BTS Audiovisuel option Son",
    template: "%s · Tech Nest",
  },
  description:
    "Cours gratuits, quiz, examens blancs et annales officielles pour le BTS Métiers de l'audiovisuel, option Métiers du son. Conforme au référentiel officiel (arrêté du 4 juin 2013, RNCP37196).",
  keywords: [
    "BTS audiovisuel",
    "BTS métiers du son",
    "E3 PTES",
    "annales BTS son",
    "révision BTS audiovisuel",
    "acoustique",
    "audionumérique",
  ],
  openGraph: {
    title: "Tech Nest — Réussir le BTS Audiovisuel option Son",
    description:
      "La plateforme de préparation dédiée à l'option Métiers du son : cours alignés sur le référentiel officiel, annales E3-PTES, certificats de compétences.",
    locale: "fr_FR",
    type: "website",
    siteName: "Tech Nest",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <AppProviders>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </AppProviders>
      </body>
    </html>
  );
}
