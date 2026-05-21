import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/custom-cursor";
import { LoadingScreen } from "@/components/loading-screen";
import { LenisScroll } from "@/components/lenis-scroll";

export const metadata: Metadata = {
  title: "Ankit | AI/ML Developer and React.js Portfolio",
  description: "React.js portfolio for Ankit, showcasing AI/ML projects, Python, data analysis, and model evaluation.",
  keywords: ["Ankit", "AI ML Portfolio", "React.js Portfolio", "Python Developer", "Machine Learning"],
  openGraph: {
    title: "Ankit | AI/ML Developer",
    description: "A portfolio showcasing machine learning, Python, data analysis, automation, and React.js interfaces.",
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
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
