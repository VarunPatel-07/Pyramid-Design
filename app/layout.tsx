import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Pyramid Design | Architecture & Interior Design Studio",
  description:
    "Pyramid Design offers professional architecture design, interior design, 3D visualization, and modern planning solutions for residential and commercial projects.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`antialiased bg-(--color-bg) overflow-x-hidden`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
