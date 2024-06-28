import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ceylon-Yummy",
  description: "AI food delivery service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="h-24">
        <Navbar />
      </div>
      <div className="h-[calc(100vh-6rem)]">{children}
      </div>
      </body>
    </html>
  );
}
