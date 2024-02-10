import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: '--font-quicksand',
  weight: ['400', '600', '700']
});

export const metadata: Metadata = {
  title: "Draw UI - Everything You Need",
  description: "A Great alternative of Figma Adobe XD Sketch for UI Prototype",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.className} bg-primary-gray-200`}>
        <Room>
          {children}
        </Room>
      </body>
    </html>
  );
}
