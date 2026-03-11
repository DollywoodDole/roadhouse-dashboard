import { C, FONTS, BRASS_GRAD, SUNSET } from './tokens'

export default function PageHeader({ section, title, titleAccent, subtitle, action }) {
  return (
    <div style={{
      padding: '32px 44px 28px',
      borderBottom: `1px solid ${C.border}`,
      display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Ambient background */}
      <div style={{
        position: 'absolute', right: -100, top: -100,
        width: 400, height: 300,
        background: 'radial-gradient(circle, rgba(255,107,53,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div>
        <div style={{
          fontFamily: FONTS.body, fontSize: 10,
          letterSpacing: 5, textTransform: 'uppercase',
          color: C.muted, marginBottom: 8,
        }}>{section}</div>

        <h1 style={{
          fontFamily: FONTS.display,
          fontSize: 44, letterSpacing: 5,
          fontWeight: 400, lineHeight: 1,
        }}>
          <span style={{ color: C.cream }}>{title} </span>
          <span style={{
            background: SUNSET,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>{titleAccent}</span>
        </h1>

        {subtitle && (
          <div style={{
            fontFamily: FONTS.serif, fontStyle: 'italic',
            fontSize: 15, color: C.muted, marginTop: 8,
          }}>{subtitle}</div>
        )}
      </div>

      {action && action}
    </div>
  )
}
