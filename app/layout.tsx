// app/layout.tsx

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main className="max-w-3xl mx-auto px-6 py-16 min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}