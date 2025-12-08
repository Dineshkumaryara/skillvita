import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/landing-page/Footer";
import ScrollToTopButton from "@/components/common/ScrollToTopButton";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coursevita",
  description:
    "Coursevita is here to guide you on your career transformation. Welcome to Coursevita, your gateway to a dynamic world of learning.",
  keywords: [
    "Coursevita",
    "Job Simulation",
    "Final Year Projects",
    "Portfolio Builder",
    "Career",
    "Workshops",
    "Blogs",
  ],
  openGraph: {
    title: "Coursevita - Transform Your Career",
    description:
      "Your gateway to a dynamic world of learning and career transformation.",
    url: "https://main-revitalize.vercel.app",
    siteName: "Coursevita",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coursevita preview",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coursevita - Transform Your Career",
    description:
      "Join Coursevita to explore hands-on learning experiences and build your future.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Navbar />
          <div className=" mt-20"></div>
          {children}
          <Footer />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
