import React from 'react';
import { ImageResponse } from 'next/og';

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

type SharePreviewSize = {
  width: number;
  height: number;
};

const palette = {
  background: '#030303',
  ink: '#0a0a0a',
  panelBorder: 'rgba(255,255,255,0.25)',
  accent: '#ffba08',
  glow: 'rgba(255, 186, 8, 0.45)',
  textPrimary: '#ffffff',
  textSecondary: 'rgba(255,255,255,0.82)',
};

export async function createSharePreviewImage(size: SharePreviewSize) {
  const horizontalPadding = Math.max(64, Math.round(size.width * 0.1));
  const verticalPadding = Math.max(60, Math.round(size.height * 0.18));
  const eyebrowFontSize = clamp(size.width * 0.014, 14, 22);
  const titleFontSize = clamp(size.width * 0.08, 74, 110);
  const subtitleFontSize = clamp(size.width * 0.028, 28, 38);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: palette.background,
          color: palette.textPrimary,
          fontFamily: "Space Grotesk, 'Playfair Display', sans-serif",
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(120deg, rgba(3,3,3,0.95) 15%, rgba(13,13,13,0.8) 50%, rgba(3,3,3,0.95) 85%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'saturate(110%) brightness(0.9)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(circle at 25% 30%, rgba(255,255,255,0.16), transparent 45%),' +
              'radial-gradient(circle at 85% 20%, rgba(255, 186, 8, 0.24), transparent 50%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.7,
            display: 'flex',
          }}
        >
          <div
            style={{
              position: 'absolute',
              width: '48%',
              height: '58%',
              top: '12%',
              right: '6%',
              borderRadius: 32,
              border: `2px solid ${palette.panelBorder}`,
              background: 'rgba(12,12,12,0.6)',
              boxShadow: `0 25px 60px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.05)`,
              transform: 'rotate(2deg)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '32%',
              height: '32%',
              top: '50%',
              right: '20%',
              borderRadius: 20,
              border: `2px solid ${palette.panelBorder}`,
              background: 'rgba(10,10,10,0.75)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.55)',
              transform: 'rotate(-4deg)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '22%',
              height: '26%',
              top: '30%',
              right: '48%',
              borderRadius: 18,
              border: `2px solid ${palette.panelBorder}`,
              background: 'rgba(255,255,255,0.05)',
              boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
              transform: 'rotate(-8deg)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: 210,
              height: 210,
              bottom: '16%',
              right: '12%',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(255,186,8,0.45) 0%, rgba(255,186,8,0) 64%)',
              filter: 'blur(0.5px)',
            }}
          />
        </div>
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            height: '100%',
            padding: `${verticalPadding}px ${horizontalPadding}px`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 28,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              letterSpacing: '0.36em',
              textTransform: 'uppercase',
              fontSize: eyebrowFontSize,
              color: 'rgba(255,255,255,0.7)',
            }}
          >
            <span style={{ flex: 'none' }}>Portfolio</span>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.28)' }} />
            <span style={{ flex: 'none' }}>Science · Art · Storytelling</span>
          </div>

          <div
            style={{
              fontSize: titleFontSize,
              lineHeight: 1.05,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Fien De Doncker
            <span style={{ color: palette.accent }}> — Comics Portfolio</span>
          </div>

          <p
            style={{
              fontSize: subtitleFontSize,
              maxWidth: 780,
              color: palette.textSecondary,
              lineHeight: 1.5,
            }}
          >
            Science, art, and storytelling comics translating research, data, and lived realities
            into bold narratives for climate and social justice.
          </p>
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    },
  );
}


