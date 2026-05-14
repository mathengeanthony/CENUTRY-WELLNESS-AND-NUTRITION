import fs from 'fs';
import path from 'path';

const srcDir = './PRODUCT IMAGES';
const destDir = './public/images';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

if (fs.existsSync(srcDir)) {
  fs.readdirSync(srcDir).forEach(file => {
    const srcFile = path.join(srcDir, file);
    const destFile = path.join(destDir, file);
    if (fs.statSync(srcFile).isFile()) {
      fs.copyFileSync(srcFile, destFile);
    }
  });
  console.log('Done copying product images.');
} else {
  console.log(`Source directory not found, skipping: ${srcDir}`);
}

