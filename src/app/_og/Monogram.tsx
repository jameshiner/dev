import { colors } from './assets';

// "JH" in the site's accent on its dark background, for the favicon and the iOS home-screen icon.
export function Monogram({ fontSize, radius = 0 }: { fontSize: number; radius?: number }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderRadius: radius,
        background: colors.bg,
        color: colors.accent,
        fontFamily: 'IBM Plex Sans',
        fontSize,
        fontWeight: 700,
        letterSpacing: '-0.04em',
      }}
    >
      JH
    </div>
  );
}
