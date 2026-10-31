import { site } from '@/data/site';
import { bannerSrc, colors } from './assets';

// Link-preview card (1200×630): name and role on the left, the sidebar banner on the right.
export function ShareCard() {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        background: colors.bg,
        fontFamily: 'IBM Plex Sans',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: 660,
          padding: '0 72px',
        }}
      >
        <div style={{ width: 72, height: 6, borderRadius: 3, background: colors.accent }} />
        <div
          style={{
            marginTop: 36,
            color: colors.text,
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1,
          }}
        >
          {site.name}
        </div>
        <div style={{ marginTop: 20, color: colors.accent, fontSize: 34, fontWeight: 500 }}>
          {site.role}
        </div>
        <div style={{ marginTop: 10, color: colors.muted, fontSize: 28, fontWeight: 500 }}>
          {site.location}
        </div>
        <div style={{ marginTop: 64, color: colors.muted, fontSize: 26, fontWeight: 500 }}>
          hiner.dev
        </div>
      </div>

      <div style={{ display: 'flex', position: 'relative', flex: 1 }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> */}
        <img
          src={bannerSrc}
          alt=""
          width={540}
          height={630}
          style={{ objectFit: 'cover', objectPosition: '70% 50%' }}
        />
        {/* Soft edge so the photo blends into the background. */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 140,
            height: '100%',
            background: `linear-gradient(to right, ${colors.bg}, transparent)`,
          }}
        />
      </div>
    </div>
  );
}
