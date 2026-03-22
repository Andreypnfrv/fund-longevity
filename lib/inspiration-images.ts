import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const EXT = /\.(jpe?g|png|webp|gif|avif)$/i;

const MAX_W = 1400;

export type InspirationImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export async function getInspirationImages(): Promise<InspirationImage[]> {
  const dir = path.join(process.cwd(), 'public', 'inspiration');
  if (!fs.existsSync(dir)) return [];

  const files = fs
    .readdirSync(dir)
    .filter((f) => EXT.test(f) && !f.startsWith('.'))
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

  const out: InspirationImage[] = [];
  for (const file of files) {
    const fullPath = path.join(dir, file);
    let width = 1200;
    let height = 800;
    try {
      const meta = await sharp(fullPath).metadata();
      if (meta.width && meta.height) {
        width = meta.width;
        height = meta.height;
        if (width > MAX_W) {
          height = Math.round((height * MAX_W) / width);
          width = MAX_W;
        }
      }
    } catch {
      /* defaults */
    }
    out.push({
      src: `/inspiration/${encodeURIComponent(file)}`,
      alt: file
        .replace(/\.[^.]+$/i, '')
        .replace(/[_]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim() || 'Inspiration',
      width,
      height,
    });
  }
  return out;
}
