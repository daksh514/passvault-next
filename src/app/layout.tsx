import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PassVault - Manage Passwords",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + ' bg-gray-100'}>
        <div className="max-w-4xl px-8 mx-auto">
        {children}
        </div>
      </body>
    </html>
  );
}
