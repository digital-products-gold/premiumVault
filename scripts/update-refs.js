
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '../');

const filesToUpdate = [
    'src/data/products.ts',
    'src/components/BonusProducts.tsx'
];

filesToUpdate.forEach(file => {
    const filePath = path.join(rootDir, file);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        // Replace .png with .webp and .jpg with .webp
        const newContent = content.replace(/\.png/g, '.webp').replace(/\.jpg/g, '.webp');
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log(`Updated ${file}`);
        } else {
            console.log(`No changes needed for ${file}`);
        }
    } else {
        console.error(`File not found: ${file}`);
    }
});
