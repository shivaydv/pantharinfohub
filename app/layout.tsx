import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import localFont from "next/font/local";
import LenisDiv from "@/lib/LenisDiv";
import { metadata as siteMetadata } from "@/lib/metadata";
import { Header } from "@/components/others/Header";
import Footer from "@/components/others/Footer";

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

const tusker = localFont({
  src: "../fonts/tusker.otf",
  variable: "--font-tusker",
  weight: "400",
});

const SourceCodePro = Source_Code_Pro({
  variable: "--font-source-code-pro",
  subsets: ["latin"],
});

export const metadata: Metadata = siteMetadata;



import { LoadingProvider } from "@/lib/LoadingContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${CalSans.variable} ${SourceCodePro.variable} ${tusker.variable} antialiased`}
      >
        <Toaster position="top-center" richColors />
        <LoadingProvider>
          <LenisDiv>
            <Header />
            {children}
            <Footer />
          </LenisDiv>
        </LoadingProvider>
      </body>
    </html>
  );
}
