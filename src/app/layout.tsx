import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans'; // Corrected import path
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster"; // Import Toaster
import { cn } from "@/lib/utils";

// Use the variable directly from the imported font object
// const geistSans = GeistSans; // This assigns the font object, CSS variable is handled differently with 'geist'

export const metadata: Metadata = {
  title: 'Aniket Tiwari Portfolio',
  description: 'Portfolio of Aniket Tiwari | Web Developer | HTML, CSS, JS, TS, Tailwind, Python',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Apply the font class directly to the html tag
    <html lang="en" className={cn("h-full", GeistSans.variable)}>
      {/* Remove GeistSans.variable from body and ensure font-sans uses the CSS variable */}
      <body className={cn("font-sans antialiased flex flex-col min-h-screen")}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
        <Footer />
        <Toaster /> {/* Add Toaster component */}
      </body>
    </html>
  );
}
