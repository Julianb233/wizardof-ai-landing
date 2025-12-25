const sharp = require('sharp');
const path = require('path');

async function createOGFromHero() {
  const inputPath = path.join(__dirname, '../public/images/wizard-of-ai-profile.png');
  const outputPath = path.join(__dirname, '../public/opengraph-image.jpg');

  try {
    const metadata = await sharp(inputPath).metadata();
    console.log(`Input image: ${metadata.width}x${metadata.height}`);

    // Resize to 1200x630 for optimal social sharing
    await sharp(inputPath)
      .resize(1200, 1200, {
        fit: 'cover',
        position: 'center'
      })
      .extract({ left: 0, top: 285, width: 1200, height: 630 })
      .jpeg({ quality: 95 })
      .toFile(outputPath);

    console.log('✅ OG image created from hero image successfully!');
    console.log('   Size: 1200x630px (optimized for social sharing)');
    console.log('   This image will appear when sharing on iPhone messages, Facebook, Twitter, LinkedIn, etc.');
  } catch (error) {
    console.error('❌ Error creating OG image:', error);
    process.exit(1);
  }
}

createOGFromHero();
