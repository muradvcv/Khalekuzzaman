import {
  Black_Ops_One,
  Bree_Serif,
  Geist,
  Geist_Mono,
  Oswald,
} from "next/font/google";

import "./globals.css";

import Footer from "@/Components/Home/Footer";
import Navabar from "@/Components/Home/Navbar";
import Preloader from "@/Components/Preloader";
import Navbar from "@/Components/Home/Navbar";


// ================= FONTS =================

const breeserif = Bree_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-breeserif",
});

const blackOps = Black_Ops_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-black-ops",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ================= METADATA =================

export const metadata = {
  title: "Khalekuzzaman",
  description: "Portfolio of Khalekuzzaman",
};

// ================= ROOT LAYOUT =================

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${blackOps.variable} ${breeserif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#080808]">

        {/* ================= PRELOADER ================= */}

        <Preloader />

        {/* ================= NAVBAR ================= */}

        <Navbar />

        {/* ================= MAIN ================= */}

        <main className="flex-grow">
          {children}
        </main>

        {/* ================= FOOTER ================= */}

        <Footer />

      </body>
    </html>
  );
}