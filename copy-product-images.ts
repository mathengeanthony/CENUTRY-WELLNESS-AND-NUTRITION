import fs from 'fs';
import path from 'path';

const srcDir = './PRODUCT IMAGES';
const destDir = './public/images';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

fs.readdirSync(srcDir).forEach(file => {
  const srcFile = path.join(srcDir, file);
  const destFile = path.join(destDir, file);
  fs.copyFileSync(srcFile, destFile);
});
console.log('Done copying product images.');
