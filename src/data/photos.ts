import type { StaticImageData } from 'next/image';
import amke2 from '../../public/img/photos/AMKE_20250401_2.jpg';
import awpe01 from '../../public/img/photos/AWPE_20241101_01.jpg';
import awpe05 from '../../public/img/photos/AWPE_20220911_05.jpg';
import baea18 from '../../public/img/photos/BAEA_20250224_18.jpg';
import baea22 from '../../public/img/photos/BAEA_20250323_22.jpg';
import bars02 from '../../public/img/photos/BARS_20230101_02.jpg';
import bars06 from '../../public/img/photos/BARS_20240723_06.jpg';
import buow016 from '../../public/img/photos/BUOW_20250509_016.jpg';
import easo05 from '../../public/img/photos/EASO_20250522_05.jpg';
import easo86 from '../../public/img/photos/EASO_20250520_86.jpg';
import easo217 from '../../public/img/photos/EASO_20250528_217.jpg';
import easo417 from '../../public/img/photos/EASO_20250528_417.jpg';
import leow07 from '../../public/img/photos/LEOW_20241127_07.jpg';
import leow13 from '../../public/img/photos/LEOW_20241204_13.jpg';
import leow20 from '../../public/img/photos/LEOW_20241204_20.jpg';
import leow87 from '../../public/img/photos/LEOW_20250220_87.jpg';
import mall050 from '../../public/img/photos/MALL_20250512_050.jpg';
import noha1 from '../../public/img/photos/NOHA_20240109_1.jpg';
import noha135 from '../../public/img/photos/NOHA_20231231_135.jpg';
import noha386 from '../../public/img/photos/NOHA_20231231_386.jpg';

export type Photo = {
  src: StaticImageData;
  /** The species; used as alt text. */
  alt: string;
};

// Four-letter banding codes, as used in the filenames (CODE_YYYYMMDD_NN.jpg).
const species = {
  AMKE: 'American Kestrel',
  AWPE: 'American White Pelican',
  BAEA: 'Bald Eagle',
  BARS: 'Barn Swallow',
  BUOW: 'Burrowing Owl',
  EASO: 'Eastern Screech-Owl',
  LEOW: 'Long-eared Owl',
  MALL: 'Mallard duckling',
  NOHA: 'Northern Harrier',
};

// Newest first. Reorder freely; the gallery shows them in this order.
export const photos: Photo[] = [
  { src: easo217, alt: species.EASO },
  { src: easo417, alt: species.EASO },
  { src: easo05, alt: species.EASO },
  { src: easo86, alt: species.EASO },
  { src: mall050, alt: species.MALL },
  { src: buow016, alt: species.BUOW },
  { src: amke2, alt: species.AMKE },
  { src: baea22, alt: species.BAEA },
  { src: baea18, alt: species.BAEA },
  { src: leow87, alt: species.LEOW },
  { src: leow13, alt: species.LEOW },
  { src: leow20, alt: species.LEOW },
  { src: leow07, alt: species.LEOW },
  { src: awpe01, alt: species.AWPE },
  { src: bars06, alt: species.BARS },
  { src: noha1, alt: species.NOHA },
  { src: noha135, alt: species.NOHA },
  { src: noha386, alt: species.NOHA },
  { src: bars02, alt: species.BARS },
  { src: awpe05, alt: species.AWPE },
];
