import fs from 'fs';
import path from 'path';

const srcDir = './BRAND LOGOS AND CATALOGUE IMAGES AND THUMBNAILS';
const destDir = './public/brand_category_images';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.readdirSync(srcDir).forEach(file => {
  const srcFile = path.join(srcDir, file);
  const destFile = path.join(destDir, file);
  fs.copyFileSync(srcFile, destFile);
  console.log(`Copied ${file}`);
});
