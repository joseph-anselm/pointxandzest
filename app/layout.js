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
import Script from "next/script";

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
        {/* Chatbase Chatbot Embed */}
          <Script id="chatbase-loader" strategy="afterInteractive">
          {`
            (function(){
              if(!window.chatbase||window.chatbase("getState")!=="initialized"){
                window.chatbase=(...arguments)=>{
                  if(!window.chatbase.q){window.chatbase.q=[]}
                  window.chatbase.q.push(arguments)
                };
                window.chatbase=new Proxy(window.chatbase,{
                  get(target,prop){
                    if(prop==="q"){return target.q}
                    return (...args)=>target(prop,...args)
                  }
                })
              }
              const onLoad=function(){
                const script=document.createElement("script");
                script.src="https://www.chatbase.co/embed.min.js";
                script.id="uOtVLi_IQofAG6DJ9Q0oP";
                script.domain="www.chatbase.co";
                document.body.appendChild(script)
              };
              if(document.readyState==="complete"){onLoad()}
              else{window.addEventListener("load",onLoad)}
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
