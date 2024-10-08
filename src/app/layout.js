import localFont from "next/font/local";
import "./globals.css";

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
        <nav className="bg-blue-700 text-white p-4 mb-5">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">School Management System</h1>
            <ul className="flex space-x-4">
              <li>
                <a href="#home" className="hover:text-gray-200">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-200">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-200">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="">
          {children}
        </div>
        {/* Footer Section */}
        <footer className="bg-blue-700 text-white py-8">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} School Management System. All rights reserved.</p>
            <ul className="flex space-x-4">
              <li>
                <a href="#home" className="hover:text-gray-200">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-200">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gray-200">Contact</a>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
