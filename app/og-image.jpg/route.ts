import { createSharePreviewImage } from '@/utils/sharePreviewImage';

export const runtime = 'edge';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';
export const alt =
  'Fien De Doncker — Comics portfolio hero artwork highlighting research-driven storytelling';

export async function GET() {
  return createSharePreviewImage(size);
}


