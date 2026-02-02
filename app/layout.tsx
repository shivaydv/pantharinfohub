import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import localFont from "next/font/local";
import LenisDiv from "@/lib/LenisDiv";
import { metadata as siteMetadata } from "@/lib/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const CalSans = localFont({
  src: "../fonts/CalSans-Regular.ttf",
  variable: "--font-cal-sans",
  weight: "600",
});

export const metadata: Metadata = siteMetadata;



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${CalSans.variable} antialiased`}
      >
        <Toaster position="top-center" richColors />
        <LenisDiv>

          {children}
        </LenisDiv>
      </body>
    </html>
  );
}
