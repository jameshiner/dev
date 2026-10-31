import { ImageResponse } from 'next/og';
import { fonts } from './_og/assets';
import { Monogram } from './_og/Monogram';

// Browser-tab icon. Drawing code lives in _og/.
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(<Monogram fontSize={17} radius={7} />, { ...size, fonts: [...fonts] });
}
