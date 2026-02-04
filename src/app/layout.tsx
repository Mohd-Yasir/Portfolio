import type { Metadata } from "next";
import "./globals.css";
import SmoothScroller from "@/components/ui/SmoothScroller";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "Yasir | Flutter Engineer & Security Enthusiast",
  description: "Personal portfolio of a Flutter Engineer and Cybersecurity Enthusiast. Building secure, high-performance mobile experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-cyber-dark text-foreground overflow-x-hidden selection:bg-cyber-green selection:text-black">
        <SmoothScroller>
          <Navbar />
          <main className="flex flex-col min-h-screen">
            {children}
          </main>
        </SmoothScroller>
      </body>
    </html>
  );
}
