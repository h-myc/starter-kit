import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Starter Kit",
  description: "A secure, robust Next.js template for solo developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
