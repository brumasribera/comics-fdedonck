import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';

const siteMetadata = {
  title: 'Fien De Doncker — Comics Portfolio | Science & Social Justice',
  description:
    'Science, art, and storytelling comics at the intersection of research, art, and social justice. Visual narratives translating data and lived realities into bold stories for climate action.',
  url: 'https://comics-fdedonck.vercel.app',
  imageAlt: 'Fien De Doncker — Comics portfolio share preview',
};
const shareImages = {
  openGraph: `${siteMetadata.url}/opengraph-image`,
  twitter: `${siteMetadata.url}/twitter-image`,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: siteMetadata.title,
  description: siteMetadata.description,
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    url: siteMetadata.url,
    title: siteMetadata.title,
    description: siteMetadata.description,
    siteName: 'Fien De Doncker',
    locale: 'en_US',
    images: [
      {
        url: shareImages.openGraph,
        secureUrl: shareImages.openGraph,
        width: 1200,
        height: 630,
        alt: siteMetadata.imageAlt,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: shareImages.twitter,
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


