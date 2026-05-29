import type { Metadata } from "next";
import { Syne, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import FloatingShapes3D from "@/components/FloatingShapes3D";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harsh Verma — Developer Portfolio",
  description:
    "Flutter, Frontend, Backend, Full Stack, ML & AI developer. I build things that matter, at every layer of the stack.",
  keywords: [
    "developer", "portfolio", "flutter", "react", "nextjs",
    "machine learning", "AI", "full stack", "harsh verma",
  ],
  authors: [{ name: "Harsh Verma" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Harsh Verma — Developer Portfolio",
    description: "Flutter, Frontend, Backend, Full Stack, ML & AI developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceGrotesk.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Prevent dark-mode flash — runs before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('dark-mode')==='true'){document.documentElement.classList.add('dark')}}catch(e){}`,
          }}
        />
      </head>
      <body>
        <FloatingShapes3D />
        <CustomCursor />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

