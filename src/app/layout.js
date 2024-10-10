import localFont from "next/font/local";
import "./globals.css";

import Navbar from "../../components/Shared/Navbar";
import Footer from "../../components/Shared/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "School Management",
  description: "My first Next Js App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`} 
      >
        {/* Navbar */}
        <Navbar/>
        <div className="">
          {children}
        </div>
        {/* Footer Section */}
        <Footer/>
      </body>
    </html>
  );
}
