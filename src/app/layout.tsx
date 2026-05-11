import type { Metadata } from "next";
import { Sora, Unbounded } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neuroxon Institute | Corporate Brain Health",
  description: "Executive Brain Risk Management & Neuroperformance Clinic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${sora.variable} ${unbounded.variable} antialiased dark`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
