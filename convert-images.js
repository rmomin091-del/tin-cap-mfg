import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname, 'public/images');

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(function (file) {
        if (path.extname(file) === '.png') {
            const inputPath = path.join(directoryPath, file);
            const outputPath = path.join(directoryPath, path.basename(file, '.png') + '.webp');

            sharp(inputPath)
                .webp({ quality: 80 })
                .toFile(outputPath)
                .then(info => { console.log(`Converted ${file} to WebP`); })
                .catch(err => { console.error(`Error converting ${file}:`, err); });
        }
    });
});
