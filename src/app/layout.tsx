import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./../styles/globals.css";
import Header from "@/components/core/Header";
import Footer from "@/components/core/Footer";
import Providers from "@/components/core/Providers";
import { Analytics } from "@vercel/analytics/next"

const manrope = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800"],
});

export const metadata: Metadata = {
  title: "CodeKar - Learn Coding with AI in Karachi",
  description: "2-day beginner-friendly coding workshops in Karachi. Learn to build real apps and websites with AI tools. Perfect for personal projects, school, or starting your tech career.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark raptorv-font">
      <body className={`min-h-screen flex flex-col antialiased ${manrope.variable}`}>
        <Providers>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
