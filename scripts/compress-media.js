import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Configuramos la ruta de FFmpeg
ffmpeg.setFfmpegPath(ffmpegStatic);

// Carpetas que vamos a procesar
const FOLDERS = ['public', 'src/assets'];
const MAX_WIDTH = 1920; // Ancho máximo
const QUALITY = 75;     // Calidad de compresión

// Extensiones permitidas
const IMG_EXTS = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];
const VID_EXTS = ['.mp4', '.webm', '.mov'];

async function processImage(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const tempPath = filePath + '.tmp' + ext;

    try {
        let transform = sharp(filePath);
        const metadata = await transform.metadata();

        // Reducir la resolución si es muy grande
        if (metadata.width > MAX_WIDTH) {
            transform = transform.resize({ width: MAX_WIDTH, withoutEnlargement: true });
        }

        // Aplicar compresión específica según el formato (Mantiene el mismo formato)
        if (ext === '.jpg' || ext === '.jpeg') {
            transform = transform.jpeg({ quality: QUALITY, mozjpeg: true });
        } else if (ext === '.png') {
            transform = transform.png({ quality: QUALITY, compressionLevel: 8 });
        } else if (ext === '.webp') {
            transform = transform.webp({ quality: QUALITY });
        }

        await transform.toFile(tempPath);

        let originalSize = fs.statSync(filePath).size;
        let newSize = fs.statSync(tempPath).size;

        if (newSize < originalSize) {
            fs.renameSync(tempPath, filePath);
            return { optimized: true, saved: originalSize - newSize };
        } else {
            // Si el archivo comprimido es más pesado, conservamos el original.
            fs.unlinkSync(tempPath);
            return { optimized: false, saved: 0 };
        }
    } catch (e) {
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        throw e;
    }
}

function processVideo(filePath) {
    return new Promise((resolve, reject) => {
        const ext = path.extname(filePath).toLowerCase();
        const tempPath = filePath + '.tmp' + ext;

        ffmpeg(filePath)
            .output(tempPath)
            .videoCodec('libx264')
            .outputOptions([
                '-crf 28', // Nivel de compresión (0-51, el 28 es adecuado para web)
                '-preset fast',
                '-movflags +faststart' // Optimiza para que el video inicie rapido en web
            ])
            .on('end', () => {
                try {
                    let originalSize = fs.statSync(filePath).size;
                    let newSize = fs.statSync(tempPath).size;

                    if (newSize < originalSize) {
                        fs.renameSync(tempPath, filePath);
                        resolve({ optimized: true, saved: originalSize - newSize });
                    } else {
                        fs.unlinkSync(tempPath);
                        resolve({ optimized: false, saved: 0 });
                    }
                } catch (e) {
                    reject(e);
                }
            })
            .on('error', (err) => {
                if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
                reject(err);
            })
            .run();
    });
}

async function walkDir(dir) {
    let results = [];
    if (!fs.existsSync(dir)) return results;

    const list = fs.readdirSync(dir);
    for (const file of list) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            results = results.concat(await walkDir(filePath));
        } else {
            const ext = path.extname(file).toLowerCase();
            if (IMG_EXTS.includes(ext)) {
                results.push({ type: 'image', path: filePath });
            } else if (VID_EXTS.includes(ext)) {
                results.push({ type: 'video', path: filePath });
            }
        }
    }
    return results;
}

async function main() {
    console.log('Buscando archivos multimedia en public/ y src/assets/ ...');
    let files = [];
    for (const folder of FOLDERS) {
        const fullPath = path.join(rootDir, folder);
        files = files.concat(await walkDir(fullPath));
    }

    console.log(`Encontrados ${files.length} archivos para analizar.\n`);
    let totalSaved = 0;

    for (let i = 0; i < files.length; i++) {
        const f = files[i];
        const relativePath = path.relative(rootDir, f.path);

        console.log(`[${i + 1}/${files.length}] Procesando ${relativePath}...`);

        try {
            let res;
            if (f.type === 'image') res = await processImage(f.path);
            else if (f.type === 'video') res = await processVideo(f.path);

            if (res && res.optimized) {
                totalSaved += res.saved;
                console.log(`  ✓ Optimizado (Ahorro: ${(res.saved / 1024 / 1024).toFixed(2)} MB)`);
            } else {
                console.log(`  - Se dejó el original (Ya estaba óptimo o no se pudo mejorar)`);
            }
        } catch (e) {
            console.error(`  x Error optimizando: ${e.message}`);
        }
    }

    console.log(`\n========================================`);
    console.log(`¡Optimización completada!`);
    console.log(`Espacio total ahorrado: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
    console.log(`========================================\n`);
}

main().catch(console.error);
