"use client"
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../../components/Shared/Navbar";
import Footer from "../../components/Shared/Footer";
import { usePathname } from 'next/navigation'; // Import the usePathname hook

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

const metadata = {
  title: "School Management",
  description: "My first Next Js App",
};

export default function RootLayout({ children }) {
  const pathname = usePathname(); // Get the current pathname

  // Check if the current path includes 'dashboard'
  const isDashboard = pathname.startsWith('/dashboard');

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}>
        {/* Conditionally render the Navbar based on the current pathname */}
        {!isDashboard && <Navbar />}
        <main>{children}</main>
        {/* Footer Section */}
        {!isDashboard && <Footer />}
      </body>
    </html>
  );
}
