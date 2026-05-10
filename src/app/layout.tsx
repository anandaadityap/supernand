import type { Metadata } from 'next';
import './globals.css';
import { ThemeProviderWrapper } from '@/components/ThemeProviderWrapper';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'Super Nand | IT Company - SaaS & Custom Development',
  description: 'Super Nand is an IT company focused on building SaaS products and custom development projects.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@700;800&family=Inter:wght@400;500&family=Space+Grotesk:wght@700&family=JetBrains+Mono:wght@450&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen antialiased bg-brand-bg text-brand-text font-inter selection:bg-brand-primary selection:text-brand-text">
        <ThemeProviderWrapper>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}