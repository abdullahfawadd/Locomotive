import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import PageTransition from "@/components/ui/PageTransition";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Locomotive Study | Motion-led Agency Front-End Practice",
  description:
    "A front-end practice project exploring a motion-rich agency landing page with editorial layouts, smooth transitions and portfolio storytelling.",
  openGraph: {
    title: "Locomotive Study | Motion-led Agency Front-End Practice",
    description: "Front-end study inspired by premium digital agency websites.",
    images: ["/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,200;0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <PageTransition />
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
