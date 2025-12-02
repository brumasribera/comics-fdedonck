import { ImageResponse } from 'next/og';

const highlights = [
  { label: 'Latest award', value: 'Figure 1A Jury Award · 2025' },
  { label: 'Focus', value: 'Science communication · Justice · Fieldwork' },
  { label: 'Mediums', value: 'Comics · Research diaries · Poster narratives' },
];

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

type SharePreviewSize = {
  width: number;
  height: number;
};

export async function createSharePreviewImage(size: SharePreviewSize) {
  const horizontalPadding = Math.max(56, Math.round(size.width * 0.08));
  const verticalPadding = Math.max(52, Math.round(size.height * 0.14));
  const eyebrowFontSize = clamp(size.width * 0.014, 14, 20);
  const titleFontSize = clamp(size.width * 0.085, 64, 108);
  const subtitleFontSize = clamp(size.width * 0.028, 24, 34);
  const descriptionFontSize = clamp(size.width * 0.02, 20, 26);
  const highlightLabelFontSize = clamp(size.width * 0.015, 12, 16);
  const highlightValueFontSize = clamp(size.width * 0.027, 20, 26);
  const actionFontSize = clamp(size.width * 0.022, 18, 24);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#030303',
          color: '#ffffff',
          fontFamily: 'Space Grotesk, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 20% 25%, rgba(255,255,255,0.14), transparent 55%),' +
              'radial-gradient(circle at 80% 10%, rgba(107,184,255,0.2), transparent 50%),' +
              'linear-gradient(135deg, rgba(3,3,3,0.95), rgba(8,8,8,0.65))',
            filter: 'saturate(120%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: '10%',
            borderRadius: 60,
            background: 'rgba(255, 255, 255, 0.05)',
            filter: 'blur(80px)',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            height: '100%',
            padding: `${verticalPadding}px ${horizontalPadding}px`,
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 18,
              textTransform: 'uppercase',
              letterSpacing: '0.4em',
              fontSize: eyebrowFontSize,
              color: 'rgba(255,255,255,0.75)',
            }}
          >
            <span>Portfolio</span>
            <div style={{ flex: 1, height: 1, background: 'rgba(255,255,255,0.3)' }} />
            <span>Science · Art · Storytelling</span>
          </div>

          <div
            style={{
              fontSize: titleFontSize,
              lineHeight: 1.05,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Fien De Doncker
          </div>

          <div
            style={{
              fontSize: subtitleFontSize,
              color: 'rgba(255,255,255,0.9)',
              maxWidth: 860,
            }}
          >
            Comics translating research into stories that can be felt.
          </div>

          <div
            style={{
              fontSize: descriptionFontSize,
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.85)',
              maxWidth: 780,
            }}
          >
            Fieldwork notes, climate data, and lived experience meet visual storytelling to make complex issues tangible
            and galvanize action for climate and social justice.
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 18,
              marginTop: 8,
            }}
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                style={{
                  padding: '20px 24px',
                  borderRadius: 24,
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.16)',
                  minWidth: 240,
                  maxWidth: 320,
                  backdropFilter: 'blur(10px)',
                }}
              >
                <div
                  style={{
                    fontSize: highlightLabelFontSize,
                    textTransform: 'uppercase',
                    letterSpacing: '0.4em',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontSize: highlightValueFontSize,
                    fontWeight: 500,
                    color: '#ffffff',
                    marginTop: 12,
                    lineHeight: 1.4,
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 16,
              marginTop: 'auto',
            }}
          >
            <div
              style={{
                padding: '16px 40px',
                borderRadius: 999,
                background: '#ffffff',
                color: '#030303',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                fontWeight: 600,
                fontSize: actionFontSize,
                boxShadow: '0 20px 40px rgba(0,0,0,0.35)',
              }}
            >
              Explore Collections
            </div>
            <div
              style={{
                padding: '16px 40px',
                borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.4)',
                color: '#ffffff',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                fontWeight: 500,
                fontSize: actionFontSize,
                background: 'rgba(255,255,255,0.04)',
              }}
            >
              Get in touch
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    },
  );
}


