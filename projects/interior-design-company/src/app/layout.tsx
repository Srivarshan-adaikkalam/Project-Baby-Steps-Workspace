import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Ravi Interiors",
  description: "A luxury interior design digital showroom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <Navigation />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
