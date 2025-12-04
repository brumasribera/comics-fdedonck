import { headers } from 'next/headers';

import { createSharePreviewImage } from '@/utils/sharePreviewImage';

export const runtime = 'edge';
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = 'image/png';
export const alt = 'Fien De Doncker — Comics portfolio share preview';

export default async function TwitterImage() {
  const baseUrl = getRequestBaseUrl();

  return createSharePreviewImage(size, { baseUrl });
}

function getRequestBaseUrl() {
  const headerList = headers();
  const host = headerList.get('x-forwarded-host') ?? headerList.get('host');

  if (!host) {
    return undefined;
  }

  const protocol = headerList.get('x-forwarded-proto') ?? 'https';

  return `${protocol}://${host}`;
}


