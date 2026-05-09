import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

import dns from "node:dns/promises";
import { ToastContainer } from "react-toastify";
dns.setServers(["1.1.1.1", "8.8.8.8"]);

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Dragon News",
  description: "Best news portal in Bangladesh  ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={` h-full antialiased`}>
      <body className={` ${poppins.className} min-h-full flex flex-col`}>
        {children}
        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}
