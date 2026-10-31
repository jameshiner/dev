import { ImageResponse } from 'next/og';
import { shareImageAlt, shareImageSize } from '@/lib/metadata';
import { fonts } from './_og/assets';
import { ShareCard } from './_og/ShareCard';

// Link-preview image for every page. Drawing code lives in _og/.
export const alt = shareImageAlt;
export const size = shareImageSize;
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(<ShareCard />, { ...size, fonts: [...fonts] });
}
