// app/layout.tsx

import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const serif = Source_Serif_4({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zhassyn Yegnay",
    template: "%s — Zhassyn Yegnay",
  },
  description:
    "Computer science student, competitive programmer and AI enthusiast. Writing about algorithms, projects and everything in between.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${serif.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-screen flex-col">
        <Header />

        {/* No container here — post covers need the full width. */}
        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
