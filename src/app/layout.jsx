import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const banner_url = "/images/banner-image.jpg";

export const metadata = {
  title: "SINC Partners",
  description: "Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).",
  icons: {
    icon: '/images/logo-white.png',
  },
  images: [banner_url],
  openGraph: {
    images: [banner_url],
  },
  twitter: {
    card: "summary_large_image",
    title: "SINC Partners",
    description: "Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).",
    creator: "@okekedivine__",
    images: {
      url: banner_url,
    }
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-base-200"}>{children}</body>
    </html>
  );
}
