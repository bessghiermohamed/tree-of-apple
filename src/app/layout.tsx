import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic"],
  weight: ["400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "بوصلة الحقوق الرقمية - Digital Rights Compass",
  description: "المنصة الرسمية المعتمدة لحماية حقوقك الرقمية",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${tajawal.variable} antialiased bg-[#f0f5f1] text-slate-900 min-h-screen overflow-x-hidden selection:bg-[#0d7c4a] selection:text-white font-[var(--font-tajawal)]`}
        style={{ fontFamily: "'Tajawal', sans-serif" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
