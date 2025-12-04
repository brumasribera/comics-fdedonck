import type { Metadata } from 'next';

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://comics-fdedonck.vercel.app');
const routePath = '/preview';
const canonicalUrl = `${baseUrl}${routePath}`;
const previewImagePath = '/opengraph-image';
const previewImage = `${baseUrl}${previewImagePath}`;
const previewTitle = 'Fien De Doncker • Research Comics for Curious Minds';
const previewDescription =
  'Dive into comics that translate complex research into bold, accessible stories about cities, mobility, and climate justice.';

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(baseUrl),
    title: previewTitle,
    description: previewDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'article',
      url: canonicalUrl,
      title: previewTitle,
      description: previewDescription,
      siteName: 'Fien De Doncker Comics',
      images: [
        {
          url: previewImage,
          secureUrl: previewImage,
          width: 1200,
          height: 630,
          alt: 'Collage of research-driven comics by Fien De Doncker',
        },
      ],
    },
  };
}

export default function PreviewPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-6 px-6 py-16">
      <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">Share preview</p>
      <h1 className="text-4xl font-semibold text-neutral-900">{previewTitle}</h1>
      <p className="text-lg leading-relaxed text-neutral-700">{previewDescription}</p>
      <figure className="w-full">
        <div className="overflow-auto rounded-3xl border border-neutral-200 shadow-xl">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={previewImagePath} 
            alt="Preview of the comics portfolio share card" 
            className="w-full h-auto block"
            style={{ minWidth: '100%', height: 'auto' }}
          />
        </div>
        <figcaption className="bg-neutral-50 px-4 py-3 text-sm text-neutral-600 mt-0 rounded-b-3xl">
          This is the exact artwork WhatsApp and other Open Graph scrapers will pull.
        </figcaption>
      </figure>
      <section className="space-y-2 text-sm text-neutral-600">
        <p>
          Canonical URL:{' '}
          <a className="text-neutral-900 underline" href={canonicalUrl}>
            {canonicalUrl}
          </a>
        </p>
        <p>Image URL: {previewImage}</p>
      </section>
    </main>
  );
}


