import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import NextTopLoader from 'nextjs-toploader';

import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/Footer";


const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Escape",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
      <NextTopLoader color="#4F719E" />
        {children}
        </body>
    </html>
  );
}
