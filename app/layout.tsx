import type { Metadata } from "next";
import { DM_Sans, Rajdhani } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://makintextil.com.br";

export const metadata: Metadata = {
  title: "MakinTêxtil - Manutenção e Instalações Especializadas para Indústria Têxtil",
  description:
    "Soluções industriais completas e sob medida para a indústria têxtil. Projetos mecânicos, melhorias de máquinas, caldeiraria, manutenção de ramas e engenharia aplicada em Itaquaquecetuba - SP.",
  keywords: [
    "manutenção industrial têxtil",
    "instalação de máquinas têxteis",
    "caldeiraria industrial",
    "manutenção de ramas",
    "projetos mecânicos industriais",
    "engenharia têxtil",
    "indústria têxtil",
    "Itaquaquecetuba",
    "São Paulo",
    "makintêxtil",
  ],
  authors: [{ name: "MakinTêxtil" }],
  creator: "MakinTêxtil",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "MakinTêxtil",
    title: "MakinTêxtil - Manutenção e Instalações Especializadas para Indústria Têxtil",
    description:
      "Soluções industriais completas e sob medida para a indústria têxtil. Projetos mecânicos, melhorias de máquinas e engenharia aplicada.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "MakinTêxtil - Especialista em Indústria Têxtil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MakinTêxtil - Manutenção e Instalações para Indústria Têxtil",
    description:
      "Soluções industriais completas e sob medida para a indústria têxtil.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "theme-color": "#041f34",
    "apple-mobile-web-app-title": "MakinTêxtil",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${dmSans.variable} ${rajdhani.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
