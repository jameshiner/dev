import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Shared by the generated images (opengraph-image, icon, apple-icon in src/app/).
// Read once at module scope; the images are generated at build time.
const dir = join(process.cwd(), 'src/app/_og');
const [medium, bold, banner] = await Promise.all([
  readFile(join(dir, 'IBMPlexSans-Medium.ttf')),
  readFile(join(dir, 'IBMPlexSans-Bold.ttf')),
  readFile(join(process.cwd(), 'public/img/banner.jpeg')),
]);

// IBM Plex Sans (SIL Open Font License) as TTF, since ImageResponse can't read the woff2
// files next/font serves.
export const fonts = [
  { name: 'IBM Plex Sans', data: medium, weight: 500, style: 'normal' },
  { name: 'IBM Plex Sans', data: bold, weight: 700, style: 'normal' },
] as const;

export const bannerSrc = `data:image/jpeg;base64,${banner.toString('base64')}`;

// Dark-theme tokens from globals.css (generated images can't read CSS variables).
export const colors = {
  bg: '#101318',
  text: '#e7ebf0',
  muted: '#97a1ae',
  accent: '#7cc4e8',
};
