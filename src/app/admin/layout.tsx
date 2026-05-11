import type { Metadata } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import AdminNavbar from "@/components/sections/AdminNavbar";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Admin Dashboard | Nanda Portfolio",
  description: "Manage your portfolio projects",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-dm antialiased`}
      >
        <AdminNavbar />
        <main className="pt-20 min-h-screen bg-[var(--bg-deep)]">{children}</main>
      </body>
    </html>
  );
}
