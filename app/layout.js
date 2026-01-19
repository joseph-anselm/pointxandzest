// import { Inter } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import SectionA from "@/components/SectionA";
// import VisionMission from "@/components/VisionMission";
// import CTA from "@/components/Cta";
// import CoreValues from "@/components/CoreValues";
// import SubHeaders from "@/components/SubHeaders";
// import Head from "next/head";
// import Script from "next/script";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "PointX and Zest Verififed Resources",
//   description: "#1 IT firm In Nigeria",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <Head>
//         <title>PointX and Zest Verififed Resources</title>
//         <meta name="PointX and Zest Verififed Resources" content="Excellence, Quality, Competence" />
//         <link rel="icon" href="favicon.ico" />
//       </Head>
//       <body>
//         <Navbar/>
        
//         {children}
//         <Footer/>
//         {/* Chatbase Chatbot Embed */} 
//           <Script id="chatbase-loader" strategy="afterInteractive">
//           {`
//             (function(){
//               if(!window.chatbase||window.chatbase("getState")!=="initialized"){
//                 window.chatbase=(...arguments)=>{
//                   if(!window.chatbase.q){window.chatbase.q=[]}
//                   window.chatbase.q.push(arguments)
//                 };
//                 window.chatbase=new Proxy(window.chatbase,{
//                   get(target,prop){
//                     if(prop==="q"){return target.q}
//                     return (...args)=>target(prop,...args)
//                   }
//                 })
//               }
//               const onLoad=function(){
//                 const script=document.createElement("script");
//                 script.src="https://www.chatbase.co/embed.min.js";
//                 script.id="uOtVLi_IQofAG6DJ9Q0oP";
//                 script.domain="www.chatbase.co";
//                 document.body.appendChild(script)
//               };
//               if(document.readyState==="complete"){onLoad()}
//               else{window.addEventListener("load",onLoad)}
//             })();
//           `}
//         </Script>
//       </body>
//     </html>
//   )
// }



import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

/* =======================
   SEO + METADATA CONFIG
======================= */
export const metadata = {
  title: {
    default: "PointX and Zest | Verified IT Resources in Nigeria",
    template: "%s | PointX and Zest",
  },
  description:
    "PointX and Zest is a leading IT firm in Nigeria delivering excellence, quality, and competence in software development, web solutions(Developement, Design), and digital innovation.",
  keywords: [
    "PointX and Zest",
    "IT company in Nigeria",
    "Software development Nigeria",
    "Web development Nigeria",
    "Tech solutions",
  ],
  authors: [{ name: "PointX and Zest" }],
  creator: "PointX and Zest",
  metadataBase: new URL("https://www.pointxandzest.com"), // change if needed

  icons: {
    icon: "/img/favicon.ico",
    shortcut: "/img/favicon.ico",
    apple: "/img/apple-touch-icon.png",
  },

  openGraph: {
    title: "PointX and Zest | Verified IT Resources in Nigeria",
    description:
      "Trusted IT firm delivering modern software, web, and digital solutions across Nigeria.",
    url: "https://www.pointxandzest.com",
    siteName: "PointX and Zest",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PointX and Zest",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "PointX and Zest | Verified IT Resources",
    description:
      "Leading IT firm in Nigeria delivering excellence in digital solutions.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />

        {/* Chatbase Chatbot */}
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
  );
}
