import type { Metadata } from "next";
import { Roboto_Mono, Kranky } from "next/font/google";
import Header from "@/components/Header/Header";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import Footer from "@/components/Footer/Footer";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import DoodleBackground from "@/components/DoodleBackground/DoodleBackground";
import "./globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

const kranky = Kranky({
  variable: "--font-kranky",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anna Sylvester - Frontend Developer",
  description: "Anna Sylvester - Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoMono.variable} ${kranky.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(function(){var t=localStorage.getItem('theme');document.documentElement.setAttribute('data-theme',t||'light');})();` }} />
      </head>
      <body>
        <DoodleBackground />
        <Header />
        <Breadcrumbs />
        <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
        <Footer />
        <ThemeToggle />
      </body>
    </html>
  );
}
