
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryToScan = path.join(__dirname, '../public');

async function processDirectory(directory) {
    const files = fs.readdirSync(directory);

    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            await processDirectory(fullPath);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
                const name = path.basename(file, ext);
                if (name.endsWith('_old')) continue; // Skip already renamed files

                const webpPath = path.join(directory, `${name}.webp`);
                const oldPath = path.join(directory, `${name}_old${ext}`);

                console.log(`Converting: ${file} -> ${name}.webp`);

                try {
                    await sharp(fullPath)
                        .webp({ quality: 80 })
                        .toFile(webpPath);

                    console.log(`Renaming original: ${file} -> ${name}_old${ext}`);
                    fs.renameSync(fullPath, oldPath);
                } catch (error) {
                    console.error(`Error processing ${file}:`, error);
                }
            }
        }
    }
}

console.log('Starting image conversion...');
processDirectory(directoryToScan).then(() => {
    console.log('Conversion complete!');
}).catch(err => {
    console.error('Fatal error:', err);
});
