import type React from "react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { getSiteUrl } from "@/lib/site-config";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/next";
import { CursorProvider } from "@/context/cursor-context";
import LenisProvider from "@/components/lenis-provider";
import dynamic from "next/dynamic";

const BackgroundEffect = dynamic(() => import("@/components/background-effect"));
const CustomCursor = dynamic(() => import("@/components/custom-cursor"));
const Chatbot = dynamic(() => import("@/components/chatbot"));

// Preload fonts to ensure they're available
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  preload: true,
  display: "swap",
});

const siteUrl = getSiteUrl();
const seoTitle = "Praveen Suthar | Full Stack Web Developer & Creative Developer";
const seoDescription =
  "Praveen Suthar portfolio showcasing MERN stack, Django, real-time WebSockets collaboration, AI SaaS applications, Three.js creative web, and scalable REST APIs.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seoTitle,
    template: "%s | Praveen Suthar",
  },
  description: seoDescription,
  applicationName: "Praveen Suthar Portfolio",
  creator: "Praveen Suthar",
  publisher: "Praveen Suthar",
  authors: [{ name: "Praveen Suthar", url: siteUrl }],
  keywords: [
    "Praveen",
    "Praveen Suthar",
    "Praveen-Suthar-08",
    "Praveen developer",
    "Praveen Suthar portfolio",
    "Full Stack Developer",
    "Creative Developer",
    "MERN Stack",
    "Django Developer",
    "Three.js Developer",
    "Stranger Collaboration",
    "AI Resume Analyzer",
    "ErrandX Marketplace",
  ],
  alternates: {
    canonical: "/",
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
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: siteUrl,
    siteName: "Praveen Suthar Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Praveen Suthar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Praveen Suthar | Full Stack Web Developer & Creative Developer",
    description: seoDescription,
    images: ["/profile.jpg"],
  },
  generator: "v0.dev",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Praveen Suthar Portfolio",
    url: siteUrl,
    inLanguage: "en-US",
    description: seoDescription,
    publisher: {
      "@type": "Person",
      name: "Praveen Suthar",
      url: siteUrl,
    },
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Praveen Suthar",
    alternateName: ["Praveen-Suthar-08"],
    description: seoDescription,
    url: siteUrl,
    image: `${siteUrl}/profile.jpg`,
    jobTitle: "Full Stack Web Developer & Creative Developer",
    email: "mailto:praveensksuthar@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    mainEntityOfPage: siteUrl,
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "City Engineering College, Bangalore",
      },
    ],
    knowsAbout: [
      "Full-Stack Web Development",
      "MERN Stack",
      "Django (Python)",
      "Three.js & 3D Web",
      "Real-Time Collaboration",
      "AI Solutions & LLMs",
      "RESTful APIs",
      "Next.js & React 19",
      "PostgreSQL & MongoDB",
      "Docker & Cloudflare",
    ],
    sameAs: [
      "https://github.com/Praveen-Suthar-08",
      "https://www.linkedin.com/in/praveen-suthar-554b12333",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}
        suppressHydrationWarning
      >
        <script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
          suppressHydrationWarning
        />
        <script
          id="person-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          suppressHydrationWarning
        />
        <LenisProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <CursorProvider>
              <BackgroundEffect />
              <Analytics />
              {children}
              <CustomCursor />
              <Chatbot />
              <Toaster />
            </CursorProvider>
          </ThemeProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
