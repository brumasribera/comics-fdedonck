import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';

const siteMetadata = {
  title: 'Fien De Doncker - Comics Portfolio',
  description:
    'Science, art, and storytelling comics at the intersection of research, art, and social justice.',
  url: 'https://comics-fdedonck.vercel.app',
  imageAlt: 'Fien De Doncker — Comics portfolio share preview',
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
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: siteMetadata.imageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: ['/twitter-image'],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}


