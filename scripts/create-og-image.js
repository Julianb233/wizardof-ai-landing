const sharp = require('sharp');
const path = require('path');

async function createOGImage() {
  const inputPath = path.join(__dirname, '../public/og-image-original.jpg');
  const outputPath = path.join(__dirname, '../public/opengraph-image.jpg');

  try {
    await sharp(inputPath)
      .resize(1200, 1200, {
        fit: 'cover',
        position: 'center'
      })
      .extract({ left: 0, top: 285, width: 1200, height: 630 })
      .jpeg({ quality: 90 })
      .toFile(outputPath);

    console.log('✅ OG image created successfully at:', outputPath);
    console.log('   Size: 1200x630px (optimized for social sharing)');
  } catch (error) {
    console.error('❌ Error creating OG image:', error);
    process.exit(1);
  }
}

createOGImage();
