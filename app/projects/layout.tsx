import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-config";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Praveen Suthar across real-time collaboration platforms, AI SaaS systems, MERN and Django applications.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Praveen Suthar",
    description:
      "Explore Praveen Suthar's projects in full stack engineering, real-time collaboration, and AI systems.",
    url: `${siteUrl}/projects`,
    type: "website",
    siteName: "Praveen Suthar Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Projects by Praveen Suthar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Praveen Suthar",
    description:
      "Explore Praveen Suthar's projects in full stack engineering, real-time collaboration, and AI systems.",
    images: ["/profile.jpg"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${siteUrl}/projects`,
      },
    ],
  };

  return (
    <>
      <script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        suppressHydrationWarning
      />
      {children}
    </>
  );
}
