import { createSharePreviewImage } from '@/utils/sharePreviewImage';

export const runtime = 'edge';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';
export async function GET() {
  return createSharePreviewImage(size);
}


