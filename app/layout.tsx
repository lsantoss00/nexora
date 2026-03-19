import Toaster from "@/components/core/sonner";
import TanstackQueryProvider from "@/providers/tanstack-query-provider";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Aprimora+",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <TanstackQueryProvider>
            <NextTopLoader
              color="#0094c8"
              height={3}
              showSpinner={false}
              crawl={false}
            />

            {children}
            <Toaster position="bottom-right" />
          </TanstackQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
