import type { Metadata } from "next";
import { Tiro_Bangla, Hind_Siliguri, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const tiroBangla = Tiro_Bangla({
  weight: "400",
  subsets: ["bengali"],
  variable: "--font-display",
});

const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali"],
  variable: "--font-body",
});

const jetBrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "আমকলম — আম গাছে গ্রাফটিং সেবা | জয়পুরহাট",
  description: "পুরোনো আমগাছে উন্নত জাতের গ্রাফটিং — হিমসাগর, ল্যাংড়া, ফজলি, আম্রপালি। জয়পুরহাট সদর, ক্ষেতলাল ও কালাই এলাকায় অভিজ্ঞ হাতে নিরাপদ সেবা।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${tiroBangla.variable} ${hindSiliguri.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
