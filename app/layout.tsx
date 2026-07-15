import type { Metadata } from "next";
import { Yeseva_One, Barlow } from "next/font/google";
import "./globals.css";

const yesevaOne = Yeseva_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display-var",
  display: "swap",
});

const barlow = Barlow({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-body-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wyld West — Marketing for Health-Forward Brands",
  description:
    "Talent management, influencer programs, UGC content, and creative direction for health-forward brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${yesevaOne.variable} ${barlow.variable}`}
    >
      {/* No-JS: hide the entry overlay so main content is accessible */}
      <noscript>
        <style>{`.entry-overlay { display: none !important; }`}</style>
      </noscript>
      <body>{children}</body>
    </html>
  );
}
