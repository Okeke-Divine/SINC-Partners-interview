import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SINC Partners",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className+" bg-base-200"}>{children}</body>
    </html>
  );
}
