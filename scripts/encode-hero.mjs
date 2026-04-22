import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const HERO_PNG =
  'https://clinicabiomedintegra.com.br/_assets/media/cbc608ab726f64d67941486a2755c1a6.png';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '../public');
const outFile = path.join(outDir, 'hero-dra.webp');

const res = await fetch(HERO_PNG, { headers: { Accept: 'image/*' } });
if (!res.ok) {
  throw new Error(`Falha ao obter a imagem: ${res.status} ${res.statusText}`);
}

const buf = Buffer.from(await res.arrayBuffer());
await fs.promises.mkdir(outDir, { recursive: true });
await sharp(buf)
  .resize(1200, 1500, { fit: 'inside', withoutEnlargement: true })
  .webp({ quality: 86, effort: 4 })
  .toFile(outFile);

const stat = await fs.promises.stat(outFile);
console.log(`Gravado: ${outFile} (${(stat.size / 1024).toFixed(1)} KB)`);
