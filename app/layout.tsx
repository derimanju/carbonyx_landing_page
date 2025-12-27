import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ZeroFlow | 탄소 중립을 향한 가장 투명한 연결",
  description: "복잡한 재생에너지 시장의 비효율을 걷어내고, 발전사업자와 기업 모두를 위한 최적의 수익과 가치를 창출합니다. ZeroFlow와 함께 투명한 에너지 거래를 경험하세요.",
  keywords: ["ZeroFlow", "제로플로우", "재생에너지", "탄소중립", "RE100", "태양광", "에너지거래", "ESG"],
  openGraph: {
    title: "ZeroFlow | 탄소 중립을 향한 가장 투명한 연결",
    description: "복잡한 재생에너지 시장의 비효율을 걷어내고, 발전사업자와 기업 모두를 위한 최적의 수익과 가치를 창출합니다.",
    url: "https://zeroflow.energy", // Placeholder URL
    siteName: "ZeroFlow",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeroFlow | 탄소 중립을 향한 가장 투명한 연결",
    description: "복잡한 재생에너지 시장의 비효율을 걷어내고, 발전사업자와 기업 모두를 위한 최적의 수익과 가치를 창출합니다.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-42MJ09DE5B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-42MJ09DE5B');
          `}
        </Script>

        <Header />
        {children}
      </body>
    </html>
  );
}

