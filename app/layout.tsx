import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// ✅ Final metadata
export const metadata: Metadata = {
  title: "Grace Taiwo | Portfolio",
  description: "Frontend Developer skilled in Next.js, Vue.js & TailwindCSS.",
  openGraph: {
    title: "Grace Taiwo | Portfolio",
    description: "Frontend Developer skilled in Next.js, Vue.js & TailwindCSS.",
    url: "https://yourdomain.com",
    siteName: "Grace Taiwo Portfolio",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
