
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '../public/images');
const DIRS = ['products', 'bonus'];

async function optimizeImages() {
    console.log('Starting image optimization...');

    for (const dir of DIRS) {
        const dirPath = path.join(ROOT_DIR, dir);
        if (!fs.existsSync(dirPath)) {
            console.log(`Directory not found: ${dirPath}`);
            continue;
        }

        const files = fs.readdirSync(dirPath);

        for (const file of files) {
            if (file.endsWith('_old.png') || file.endsWith('_old.jpg')) continue;

            const ext = path.extname(file).toLowerCase();
            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                const inputPath = path.join(dirPath, file);
                const filename = path.basename(file, ext);
                const outputPath = path.join(dirPath, `${filename}.webp`);
                const oldPath = path.join(dirPath, `${filename}_old${ext}`);

                if (fs.existsSync(outputPath)) {
                    console.log(`WebP already exists for ${file}, skipping...`);
                    // Renaming original if not already renamed
                    if (!fs.existsSync(oldPath)) {
                        fs.renameSync(inputPath, oldPath);
                        console.log(`Renamed original to ${path.basename(oldPath)}`);
                    }
                    continue;
                }

                try {
                    console.log(`Converting ${file}...`);
                    await sharp(inputPath)
                        .webp({ quality: 80 })
                        .toFile(outputPath);

                    const inputStats = fs.statSync(inputPath);
                    const outputStats = fs.statSync(outputPath);

                    console.log(`  Saved ${(inputStats.size - outputStats.size) / 1024 / 1024} MB`);

                    // Rename original
                    fs.renameSync(inputPath, oldPath);
                } catch (error) {
                    console.error(`Error converting ${file}:`, error);
                }
            }
        }
    }
    console.log('Done.');
}

optimizeImages();
