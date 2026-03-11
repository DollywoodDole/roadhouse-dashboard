import { C, FONTS, Grain, Scanlines } from './tokens'

const SUNSET_CSS = `linear-gradient(135deg, #F7971E 0%, #FF6B35 40%, #FF3CAC 100%)`
const BRASS_CSS  = `linear-gradient(135deg, #C9A227, #E2C060, #B8860B)`

// ── IRON RANCH ──────────────────────────────────────────────
export function IronRanch({ title, subtitle, tag, platform }) {
  const vert = platform === 'tiktok'
  const W = vert ? 720 : 1280
  const H = vert ? 1280 : 720
  const words = (title || 'ROAD HOUSE').split(' ')
  const fs = vert ? 112 : 138

  return (
    <div style={{
      width: W, height: H,
      background: '#0A0704',
      position: 'relative', overflow: 'hidden',
      fontFamily: FONTS.display,
    }}>
      {/* Warm walnut gradient bg */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 20% 50%, #1A0F06 0%, #0A0704 100%)',
      }} />

      {/* Sunset glow top-right */}
      <div style={{
        position: 'absolute', top: -120, right: -80,
        width: 600, height: 500,
        background: 'radial-gradient(circle, rgba(255,107,53,0.18) 0%, rgba(255,60,172,0.08) 50%, transparent 75%)',
        pointerEvents: 'none',
      }} />

      {/* Bottom brass bar */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 4,
        background: BRASS_CSS,
      }} />

      {/* Left thick accent */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: 6,
        background: SUNSET_CSS,
      }} />

      {/* Diagonal slash */}
      <div style={{
        position: 'absolute', right: vert ? 0 : 320, top: -100,
        width: 3, height: vert ? H * 1.5 : 1000,
        background: 'linear-gradient(180deg, rgba(201,162,39,0.6) 0%, transparent 100%)',
        transform: 'rotate(-12deg)',
      }} />

      {/* Right brand panel */}
      {!vert && (
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: 300,
          background: 'linear-gradient(160deg, #140E07 0%, #0A0704 100%)',
          borderLeft: `1px solid ${C.borderHi}`,
        }} />
      )}

      {/* Title */}
      <div style={{
        position: 'absolute',
        left: 52, top: vert ? undefined : 0,
        bottom: vert ? 110 : undefined,
        right: vert ? 52 : 320,
        display: 'flex', flexDirection: 'column',
        justifyContent: vert ? 'flex-end' : 'center',
        zIndex: 3,
      }}>
        {tag && (
          <div style={{
            fontSize: vert ? 18 : 22, letterSpacing: 8,
            color: C.brass, marginBottom: 14, textTransform: 'uppercase',
          }}>{tag}</div>
        )}
        <div style={{
          fontSize: fs, color: C.white, lineHeight: 0.87,
          textTransform: 'uppercase', letterSpacing: -2,
        }}>
          {words.map((w, i) => <div key={i}>{w}</div>)}
        </div>
        {subtitle && (
          <div style={{
            fontFamily: FONTS.serif, fontStyle: 'italic',
            fontSize: vert ? 26 : 30, color: '#FF8C60',
            marginTop: 18, letterSpacing: 1,
          }}>{subtitle}</div>
        )}
      </div>

      {/* Brand mark */}
      <div style={{
        position: 'absolute',
        right: vert ? 52 : 0, top: vert ? 60 : 0,
        bottom: vert ? undefined : 0,
        width: vert ? undefined : 300,
        display: 'flex', flexDirection: 'column',
        alignItems: vert ? 'flex-end' : 'center',
        justifyContent: 'center', gap: 10, zIndex: 4,
      }}>
        <div style={{
          width: 76, height: 76,
          border: `2px solid ${C.brass}`,
          transform: 'rotate(45deg)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'linear-gradient(135deg, #1A1008, #0A0704)',
          boxShadow: `0 0 30px rgba(201,162,39,0.2)`,
        }}>
          <div style={{ transform: 'rotate(-45deg)', fontSize: 26 }}>
            <span style={{ background: SUNSET_CSS, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>⬡</span>
          </div>
        </div>
        <div style={{ fontSize: 42, letterSpacing: 8, background: BRASS_CSS, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>ROAD</div>
        <div style={{ fontSize: 42, letterSpacing: 8, color: C.cream, marginTop: -10 }}>HOUSE</div>
      </div>

      <Grain opacity={0.05} id="ir-grain" />
      <Scanlines opacity={0.03} />
    </div>
  )
}

// ── NEON FRONTIER ────────────────────────────────────────────
export function NeonFrontier({ title, subtitle, tag, platform }) {
  const vert = platform === 'tiktok'
  const wide = platform === 'xcard'
  const W = vert ? 720 : wide ? 1200 : 1280
  const H = vert ? 1280 : wide ? 628 : 720

  return (
    <div style={{
      width: W, height: H,
      background: '#07050A',
      position: 'relative', overflow: 'hidden',
      fontFamily: FONTS.display,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {/* Deep bg */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, #1A0D14 0%, #07050A 100%)',
      }} />

      {/* Sunset orb left */}
      <div style={{
        position: 'absolute', left: -100, top: '50%',
        transform: 'translateY(-50%)',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(255,107,53,0.15) 0%, rgba(247,151,30,0.08) 40%, transparent 70%)',
      }} />

      {/* Sunset orb right */}
      <div style={{
        position: 'absolute', right: -100, top: '50%',
        transform: 'translateY(-50%)',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(255,60,172,0.12) 0%, rgba(120,75,160,0.06) 40%, transparent 70%)',
      }} />

      {/* Top line — sunset */}
      <div style={{
        position: 'absolute', top: 0, left: '10%', right: '10%', height: 3,
        background: SUNSET_CSS,
      }} />

      {/* Bottom line — brass */}
      <div style={{
        position: 'absolute', bottom: 0, left: '20%', right: '20%', height: 2,
        background: BRASS_CSS,
      }} />

      {/* Corner brackets — brass */}
      {[
        { top: 24, left: 24, borderTop: `2px solid ${C.brass}`, borderLeft: `2px solid ${C.brass}` },
        { top: 24, right: 24, borderTop: `2px solid ${C.brass}`, borderRight: `2px solid ${C.brass}` },
        { bottom: 24, left: 24, borderBottom: `2px solid ${C.brass}`, borderLeft: `2px solid ${C.brass}` },
        { bottom: 24, right: 24, borderBottom: `2px solid ${C.brass}`, borderRight: `2px solid ${C.brass}` },
      ].map((s, i) => (
        <div key={i} style={{ position: 'absolute', width: 52, height: 52, ...s }} />
      ))}

      {/* Content */}
      <div style={{ position: 'relative', textAlign: 'center', zIndex: 2, padding: '0 80px' }}>
        {tag && (
          <div style={{
            fontSize: vert ? 16 : 20, letterSpacing: 10, marginBottom: 18,
            background: SUNSET_CSS, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>{tag}</div>
        )}
        <div style={{
          fontSize: vert ? 120 : wide ? 110 : 150,
          color: C.white, lineHeight: 0.85,
          textTransform: 'uppercase',
          textShadow: '0 0 80px rgba(255,107,53,0.2), 0 0 160px rgba(255,60,172,0.1)',
        }}>{title || 'ROAD HOUSE'}</div>

        {/* Sunset divider */}
        <div style={{
          width: '50%', height: 2, margin: '22px auto',
          background: SUNSET_CSS,
          boxShadow: '0 0 12px rgba(255,107,53,0.4)',
        }} />

        {subtitle && (
          <div style={{
            fontFamily: FONTS.serif, fontStyle: 'italic',
            fontSize: vert ? 26 : 30,
            background: BRASS_CSS, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            letterSpacing: 2,
          }}>{subtitle}</div>
        )}
        <div style={{
          fontSize: 18, letterSpacing: 8, marginTop: 14,
          color: 'rgba(201,162,39,0.4)',
        }}>ROADHOUSE</div>
      </div>

      <Grain opacity={0.04} id="nf-grain" />
      <Scanlines opacity={0.04} />
    </div>
  )
}

// ── GILDED DARK ──────────────────────────────────────────────
export function GildedDark({ title, subtitle, tag, platform }) {
  const vert = platform === 'tiktok'
  const wide = platform === 'xcard'
  const W = vert ? 720 : wide ? 1200 : 1280
  const H = vert ? 1280 : wide ? 628 : 720
  const words = (title || 'ROAD HOUSE').split(' ')

  return (
    <div style={{
      width: W, height: H,
      background: '#080604',
      position: 'relative', overflow: 'hidden',
      fontFamily: FONTS.display,
    }}>
      {/* Diagonal panel */}
      <div style={{
        position: 'absolute', top: -200, right: -80,
        width: 680, height: H + 400,
        background: 'linear-gradient(135deg, #140E06 0%, #080604 100%)',
        transform: 'rotate(-15deg)',
        borderLeft: `1px solid rgba(201,162,39,0.12)`,
      }} />

      {/* Sunset top-right bloom */}
      <div style={{
        position: 'absolute', top: -50, right: -50,
        width: 500, height: 400,
        background: 'radial-gradient(circle, rgba(255,107,53,0.12) 0%, rgba(255,60,172,0.06) 40%, transparent 70%)',
      }} />

      {/* Bottom accent */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: 4,
        background: SUNSET_CSS,
        boxShadow: '0 -4px 20px rgba(255,107,53,0.3)',
      }} />

      {/* Brand — top right */}
      <div style={{
        position: 'absolute', top: 44, right: 55, textAlign: 'right', zIndex: 3,
      }}>
        <div style={{
          fontSize: wide ? 42 : 52, letterSpacing: 8,
          background: BRASS_CSS, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>ROAD</div>
        <div style={{
          fontSize: wide ? 42 : 52, letterSpacing: 8,
          color: C.white, marginTop: -16,
        }}>HOUSE</div>
        <div style={{
          height: 2, marginTop: 8,
          background: 'linear-gradient(90deg, transparent, #C9A227)',
        }} />
      </div>

      {/* Massive title */}
      <div style={{
        position: 'absolute', left: 52,
        bottom: vert ? 110 : 60,
        zIndex: 3,
        fontSize: vert ? 148 : wide ? 115 : 174,
        lineHeight: 0.83, textTransform: 'uppercase',
        textShadow: '0 8px 80px rgba(0,0,0,0.95)',
      }}>
        {words.map((w, i) => (
          <div key={i} style={{
            color: i % 2 === 0 ? C.white : 'transparent',
            WebkitTextStroke: i % 2 === 0 ? 'none' : `2px ${C.brass}`,
            display: 'block',
          }}>{w}</div>
        ))}
      </div>

      {tag && (
        <div style={{
          position: 'absolute', left: 52, top: 52, zIndex: 3,
          fontSize: 20, letterSpacing: 8,
          background: SUNSET_CSS, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
        }}>{tag}</div>
      )}

      {subtitle && (
        <div style={{
          position: 'absolute', right: 55,
          bottom: vert ? 110 : 80,
          zIndex: 3,
          fontFamily: FONTS.serif, fontStyle: 'italic',
          fontSize: 26, color: C.brass,
          textAlign: 'right', letterSpacing: 1,
        }}>{subtitle}</div>
      )}

      <Grain opacity={0.05} id="gd-grain" />
      <Scanlines opacity={0.025} />
    </div>
  )
}
