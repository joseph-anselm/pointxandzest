import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionA from "@/components/SectionA";
import VisionMission from "@/components/VisionMission";
import CTA from "@/components/Cta";
import CoreValues from "@/components/CoreValues";
import SubHeaders from "@/components/SubHeaders";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PointX and Zest Verififed Resources",
  description: "#1 IT firm In Nigeria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>PointX and Zest Verififed Resources</title>
        <meta name="PointX and Zest Verififed Resources" content="Excellence, Quality, Competence" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <body>
        <Navbar/>
        
        {children}
        <Footer/>
      </body>
    </html>
  )
}
