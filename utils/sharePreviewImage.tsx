import React from 'react'
import { ImageResponse } from 'next/og'

type SharePreviewSize = {
  width: number
  height: number
}

type SharePreviewOptions = {
  baseUrl?: string
}

function resolveBaseUrl() {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL
  }

  if (process.env.VERCEL_URL) {
    const vercelUrl = process.env.VERCEL_URL.startsWith('http')
      ? process.env.VERCEL_URL
      : `https://${process.env.VERCEL_URL}`

    return vercelUrl
  }

  return 'http://localhost:4000'
}

export async function createSharePreviewImage(size: SharePreviewSize, options: SharePreviewOptions = {}) {
  const baseUrl = options.baseUrl ?? resolveBaseUrl()
  const imageUrl = new URL('/Figure 1A 2025/BorrowedShade_lowres.jpg', baseUrl).toString()

  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundColor: '#000',
        }}
      >
        {/* Background image, darkened */}
        <img
          src={imageUrl}
          alt=""
          width={size.width}
          height={size.height}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.35, // <<–– ENFOSQUEIX TOT EL FONS
          }}
        />

        {/* Text content */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            maxWidth: 980,
            padding: '40px 60px',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              fontSize: 12,
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.75)',
            }}
          >
            Portfolio
            <div
              style={{
                flex: 1,
                height: 1,
                background: 'rgba(255, 255, 255, 0.3)',
              }}
            />
            Science · Art · Storytelling
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 72,
              color: '#ffffff',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              fontWeight: 600,
              margin: 0,
            }}
          >
            FIEN DE DONCKER
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 22,
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 400,
              margin: 0,
              lineHeight: 1.5,
              maxWidth: 780,
            }}
          >
            Comics turning research into felt stories where field notes, data, and lived realities make climate justice
            visceral.
          </p>

          {/* Mantra line */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 14,
              marginTop: 12,
              paddingTop: 8,
              paddingBottom: 8,
              fontSize: 14,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              fontWeight: 600,
              color: '#ffffff',
              borderBottom: '1px solid rgba(255, 255, 255, 0.4)',
              maxWidth: 620,
            }}
          >
            <div
              style={{
                width: 54,
                height: 1,
                background: 'linear-gradient(90deg, transparent, #ffba08)',
              }}
            />
            Art touches, science enlightens, together they can lead to action.
          </div>
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  )
}

