import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import AOSInit from "@/components/AOSInit";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mehmet Akif Ufacik | Student",
  description: "Portfolio website of Mehmet Akif Ufacik - Software enthusiast and student at Riga Technical University",
  icons: {
    icon: "/images/favicon",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <AOSInit />
        <Navigation />
        <div className="lg:ml-64">
          {children}
        </div>
      </body>
    </html>
  );
}
