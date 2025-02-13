import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

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
      </body>
    </html>
  );
}
