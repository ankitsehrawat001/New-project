import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { LoadingScreen } from "@/components/loading-screen";
import { LenisScroll } from "@/components/lenis-scroll";

export const metadata: Metadata = {
  title: "Ankit | AI/ML Enthusiast and Python Developer",
  description: "Premium futuristic portfolio for Ankit, an ambitious AI/ML enthusiast, Python developer, and future software engineer.",
  keywords: ["Ankit", "AI ML Portfolio", "Python Developer", "Software Engineer", "Next.js Portfolio"],
  openGraph: {
    title: "Ankit | Future Software Engineer",
    description: "A premium portfolio showcasing AI, Python, automation, and modern web engineering.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>
          <LenisScroll />
          <LoadingScreen />
          <CustomCursor />
          <div className="noise" />
          <div className="blob blob-a" />
          <div className="blob blob-b" />
          <div className="blob blob-c" />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
