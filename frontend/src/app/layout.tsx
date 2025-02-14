import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Slide, ToastContainer } from "react-toastify";

const ubuntuSans = Ubuntu({
  variable: "--font-ubuntu",
  weight: ['400', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SoftPet"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/softpet.svg" />
      </head>
      <body
        className={`${ubuntuSans.variable} overflow-auto antialiased`}
      >
        {children}
        <ToastContainer position="top-right" autoClose={3000} theme="dark" transition={Slide} pauseOnHover={false} closeOnClick/>
      </body>
    </html>
  );
}
