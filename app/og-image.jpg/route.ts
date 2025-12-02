import { createSharePreviewImage } from '@/utils/sharePreviewImage';

export const runtime = 'edge';

const size = {
  width: 1200,
  height: 630,
};

const contentType = 'image/png';

export async function GET() {
  const image = await createSharePreviewImage(size);
  image.headers.set('content-type', contentType);
  return image;
}


