import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/componets/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecomerce",
  description: "this is a ecomerce webside",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
