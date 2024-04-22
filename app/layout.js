import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PointX and Zest Verififed Resources",
  description: "#1 IT firm In Nigeria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Navbar />
        <Header /> */}
        {children}
        </body>
    </html>
  );
}
