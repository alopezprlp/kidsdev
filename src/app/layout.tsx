import Header from "@/components/Header";
import "./globals.css";
import { Quicksand, Francois_One, Gilda_Display } from "next/font/google";
import Footer from "@/components/Footer";
import {Analytics} from "@vercel/analytics/react"

const francois_one = Francois_One({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-francois-one",
  weight: "400",
});

const quick_sand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quick-sand",
  weight: "400",
});

const gilda_display = Gilda_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-gilda-display",
  weight: "400",
});

export const metadata = {
  title: "Kids",
  description: "Prueba tecnica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${gilda_display.variable} ${quick_sand.variable} ${francois_one.variable}`}
      >
        <>
        <Header />
        {children}
        <Footer />
        <Analytics/>
        </>
      </body>
    </html>
  );
}
