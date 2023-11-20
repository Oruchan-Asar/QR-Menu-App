import Header from "@/components/Header/Header";
import "./normalize.css";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coffee Dream",
  description: "Coffee Dream",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
