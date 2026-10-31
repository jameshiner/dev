import { ImageResponse } from 'next/og';
import { fonts } from './_og/assets';
import { Monogram } from './_og/Monogram';

// iOS home-screen icon (iOS rounds the corners itself). Drawing code lives in _og/.
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(<Monogram fontSize={84} />, { ...size, fonts: [...fonts] });
}
