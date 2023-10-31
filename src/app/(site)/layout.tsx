import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanity tutorial",
  description: "Generated by create next app + sanity",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-3xl mx-auto py-10`}>
        <header>
          <Link
            href="/"
            className="bg-gradient-to-r from-orange-400 to-purple-500 bg-clip-text 
          text-transparent text-lg font-bold "
          >
            Home
          </Link>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  );
}
