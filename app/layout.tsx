import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';

const siteMetadata = {
  title: 'Fien De Doncker — Comics Portfolio | Science & Social Justice',
  ogTitle: 'Fien De Doncker — Comics Portfolio',
  ogDescription: 'Science, art, and storytelling comics for climate action.',
  description:
    'Science, art, and storytelling comics at the intersection of research, art, and social justice. Visual narratives translating data and lived realities into bold stories for climate action.',
  url: 'https://comics-fdedonck.vercel.app/',
  imageAlt: 'Fien De Doncker — Comics portfolio share preview',
};

// Use static opengraph-image.jpg file
const OG_IMAGE_PATH = '/opengraph-image.jpg';
const ogImageUrl = new URL(OG_IMAGE_PATH, siteMetadata.url).toString();

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: siteMetadata.title,
  description: siteMetadata.description,
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    url: siteMetadata.url,
    title: siteMetadata.ogTitle,
    description: siteMetadata.ogDescription,
    siteName: 'Fien De Doncker',
    locale: 'en_US',
    images: [
      {
        url: ogImageUrl,
        secureUrl: ogImageUrl,
        width: 1200,
        height: 630,
        alt: siteMetadata.imageAlt,
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.ogTitle,
    description: siteMetadata.ogDescription,
    images: [
      {
        url: ogImageUrl,
        alt: siteMetadata.imageAlt,
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  // Some browser extensions inject attributes (e.g. data-demoway-document-id) on <html>/<body>
  // before hydration. Suppress hydration warnings so the dev overlay stays quiet.
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {process.env.NEXT_PUBLIC_FB_APP_ID && (
          <meta property="fb:app_id" content={process.env.NEXT_PUBLIC_FB_APP_ID} />
        )}
        {/* Explicit Open Graph image dimensions to encourage large image display */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <link rel="preload" href="/Figure 1A 2025/BorrowedShade_placeholder.jpg" as="image" fetchPriority="high" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

