import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "rkali090 GitHub Pages",
  description: "A default Next.js site deployed with GitHub Pages.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
