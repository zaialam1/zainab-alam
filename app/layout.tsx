import type { Metadata } from "next";
import { Average, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const average = Average({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-body",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Zainab Alam Portfolio",
  description: "Portfolio website for Zainab Alam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${average.variable} ${playfair.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}