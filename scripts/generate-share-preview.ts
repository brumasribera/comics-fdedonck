import { writeFile } from 'node:fs/promises';
import path from 'node:path';

import { createSharePreviewImage } from '../utils/sharePreviewImage';

const targets = [
  { size: { width: 1200, height: 630 }, filename: 'opengraph-image.png' },
  { size: { width: 1200, height: 600 }, filename: 'twitter-image.png' },
];

async function generate() {
  for (const target of targets) {
    const response = await createSharePreviewImage(target.size);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const outputPath = path.resolve(process.cwd(), 'public', target.filename);

    await writeFile(outputPath, buffer);
    console.log(`✅ Saved ${target.filename}`);
  }
}

generate().catch((error) => {
  console.error('Failed to generate share preview image');
  console.error(error);
  process.exit(1);
});

