import { createSharePreviewImage } from '@/utils/sharePreviewImage';

export const runtime = 'edge';
export const size = {
  width: 1200,
  height: 600,
};
export const contentType = 'image/png';
export const alt = 'Fien De Doncker — Comics portfolio share preview';

export default async function TwitterImage() {
  return createSharePreviewImage(size);
}


