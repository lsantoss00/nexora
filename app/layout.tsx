import Toaster from "@/components/core/sonner";
import TanstackQueryProvider from "@/providers/tanstack-query-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Nexora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`dark ${inter.variable}`}>
      <body className="antialiased">
        <TanstackQueryProvider>
          <NextTopLoader
            color="#2b7fff"
            height={3}
            showSpinner={false}
            crawl={false}
          />

          {children}
          <Toaster position="bottom-right" />
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
