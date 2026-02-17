import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PAC Automation | AI-Powered Phone Answering for Small Businesses",
  description: "Never miss a call again. PAC Automation provides 24/7 AI phone answering, SMS confirmations, calendar booking, and missed call recovery for small businesses. Starting at $99/month.",
  keywords: "AI phone answering, virtual receptionist, 24/7 call answering, small business phone service, automated scheduling, missed call recovery",
  authors: [{ name: "PAC Automation" }],
  openGraph: {
    title: "PAC Automation | AI-Powered Phone Answering",
    description: "Never miss a call again. AI answers 24/7, books appointments, and recovers missed calls.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PAC Automation | AI-Powered Phone Answering",
    description: "Never miss a call again. AI answers 24/7, books appointments, and recovers missed calls.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://pac-holding.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
