import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get me a Chai - Fund your projects with chai",
  description: "This website is a crowdfunding platform for chai creators.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 bg-[radial-gradient(ellipse_50%_50%_at_90%_10%,_rgba(126,34,206,0.15),_transparent_60%),radial-gradient(ellipse_50%_50%_at_10%_90%,_rgba(30,64,175,0.15),_transparent_60%)]`}
      >
        <SessionWrapper>

          <Navbar />
          <div className="min-h-screen bg-gray-950 bg-[radial-gradient(ellipse_50%_50%_at_90%_10%,_rgba(126,34,206,0.15),_transparent_60%),radial-gradient(ellipse_50%_50%_at_10%_90%,_rgba(30,64,175,0.15),_transparent_60%)] text-white mt-16 ">

            {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
