import path from 'node:path'
import { existsSync } from 'node:fs'
import sharp from 'sharp'

const SOURCE_IMAGE = path.resolve(process.cwd(), 'public', 'Figure 1A 2025', 'BorrowedShade_lowres.jpg')
const OUTPUT_PATH = path.resolve(process.cwd(), 'public', 'Figure 1A 2025', 'BorrowedShade_placeholder.jpg')

async function generate() {
  try {
    if (!existsSync(SOURCE_IMAGE)) {
      console.error('❌ Source image not found:', SOURCE_IMAGE)
      process.exit(1)
    }

    console.log('Generating low-quality placeholder image...')
    console.log('Source:', SOURCE_IMAGE)
    
    // Get original image metadata to maintain aspect ratio
    const metadata = await sharp(SOURCE_IMAGE).metadata()
    const width = metadata.width || 1920
    const height = metadata.height || 1080
    
    // Calculate very small size maintaining aspect ratio (target ~5KB file size for instant loading)
    // Scale down to 5% of original size, maintaining aspect ratio
    const targetWidth = Math.round(width * 0.05)
    const targetHeight = Math.round(height * 0.05)
    
    console.log(`Original: ${width}x${height}, Placeholder: ${targetWidth}x${targetHeight}`)
    
    // Generate a very small, very low-quality version maintaining aspect ratio (not blurred - blur will be applied in CSS)
    await sharp(SOURCE_IMAGE)
      .resize(targetWidth, targetHeight, { fit: 'inside' })
      .jpeg({ quality: 15 })
      .toFile(OUTPUT_PATH)

    console.log('✓ Placeholder generated:', OUTPUT_PATH)
  } catch (error) {
    console.error('❌ Error:', error instanceof Error ? error.message : error)
    process.exit(1)
  }
}

generate()

