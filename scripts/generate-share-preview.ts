import path from 'node:path'

import sharp from 'sharp'

const OUTPUT_SIZE = { width: 1200, height: 630 }
const SOURCE_IMAGE = path.resolve(process.cwd(), 'public', 'Figure 1A 2025', 'BorrowedShade_lowres.jpg')
const TARGET_PATH = path.resolve(process.cwd(), 'public', 'og-cover.jpg')

async function generate() {
  await sharp(SOURCE_IMAGE)
    .resize(OUTPUT_SIZE.width, OUTPUT_SIZE.height, { fit: 'cover' })
    .jpeg({ quality: 90 })
    .toFile(TARGET_PATH)

  console.log('[share-preview] Saved og-cover.jpg')
}

generate().catch((error) => {
  console.error('Failed to generate share preview image')
  console.error(error)
  process.exit(1)
})

