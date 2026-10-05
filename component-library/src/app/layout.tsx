import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import SiteSidebar from "@/components/siteSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Looply - React Component Library",
    template: "%s | Looply",
  },
  description:
    "A free, open-source React UI component library with clean, flexible components built with Tailwind CSS for modern web apps.",
  keywords: [
    "component library",
    "react components",
    "tailwind css",
    "UI library",
    "soft UI",
    "looply",
    "open source",
    "dark mode",
  ],
  authors: [{ name: "Akin Genc" }],
  openGraph: {
    title: "Looply - React Component Library",
    description:
      "Soft, tactile UI components for React. Free, flexible, and open source.",
    siteName: "Looply",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Looply - React Component Library",
    description:
      "Soft, tactile UI components for React. Free, flexible, and open source.",
  },
  icons: {
    icon: [
      {
        url: "/looplogoli.png",
        type: "image/png",
        sizes: "640x640",
      },
    ],
    shortcut: "/looplogoli.png",
    apple: "/looplogoli.png",
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    title: "Looply",
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class">
          <SiteSidebar>{children}</SiteSidebar>
        </ThemeProvider>
      </body>
    </html>
  );
}
