import { C, FONTS, SUNSET, Grain } from '../components/tokens'
import PageHeader from '../components/PageHeader'

const TOOLS = [
  { icon: '◈', label: 'Overlay Builder',    sub: 'Create stream overlays & frames',      tag: 'COMING SOON' },
  { icon: '▣', label: 'Scene Templates',    sub: 'BRB, Starting, Ending screens',        tag: 'COMING SOON' },
  { icon: '◉', label: 'Alert Animations',   sub: 'Follow, sub, donation alerts',         tag: 'COMING SOON' },
  { icon: '◫', label: 'Lower Thirds',       sub: 'On-screen name tags & tickers',        tag: 'COMING SOON' },
  { icon: '◆', label: 'Stream Schedule',    sub: 'Weekly broadcast calendar',            tag: 'COMING SOON' },
  { icon: '▬', label: 'Chat Commands',      sub: 'Bot commands & auto-responses',        tag: 'COMING SOON' },
]

export default function StreamStudio() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto', background: C.bg }}>
      <PageHeader
        section="Studio · Live Production"
        title="STREAM"
        titleAccent="STUDIO"
        subtitle="Everything your broadcast needs — from overlay to alert"
      />

      <div style={{ padding: '40px 44px' }}>
        {/* Hero stat bar */}
        <div style={{
          display: 'flex', gap: 1,
          marginBottom: 48,
          border: `1px solid ${C.border}`,
          borderRadius: 8, overflow: 'hidden',
        }}>
          {[
            { label: 'Peak Viewers', value: '—',    unit: 'awaiting stream' },
            { label: 'Avg Watch Time', value: '—',  unit: 'awaiting stream' },
            { label: 'Clips Created', value: '0',   unit: 'this month' },
            { label: 'Live Hours', value: '0',      unit: 'this month' },
          ].map((stat, i) => (
            <div key={i} style={{
              flex: 1, padding: '20px 24px',
              background: i % 2 === 0 ? C.bgCard : C.bgPanel,
              borderRight: i < 3 ? `1px solid ${C.border}` : 'none',
            }}>
              <div style={{
                fontFamily: FONTS.display, fontSize: 36,
                background: SUNSET,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                letterSpacing: 2,
              }}>{stat.value}</div>
              <div style={{ fontFamily: FONTS.body, fontSize: 11, letterSpacing: 3, color: C.muted, textTransform: 'uppercase', marginTop: 4 }}>{stat.label}</div>
              <div style={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontSize: 11, color: C.dim, marginTop: 2 }}>{stat.unit}</div>
            </div>
          ))}
        </div>

        {/* Tool grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
        }}>
          {TOOLS.map((tool, i) => (
            <div key={i} style={{
              background: C.bgCard,
              border: `1px solid ${C.border}`,
              borderRadius: 8, padding: '28px 24px',
              position: 'relative', overflow: 'hidden',
              cursor: 'default',
              transition: 'border-color 0.2s',
            }}>
              {/* Subtle top glow */}
              <div style={{
                position: 'absolute', top: -30, left: '50%', transform: 'translateX(-50%)',
                width: 120, height: 60,
                background: 'radial-gradient(circle, rgba(201,162,39,0.06) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              <div style={{
                fontSize: 28, marginBottom: 16,
                background: SUNSET, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>{tool.icon}</div>

              <div style={{
                fontFamily: FONTS.display, fontSize: 20,
                letterSpacing: 3, color: C.cream, marginBottom: 6,
              }}>{tool.label}</div>

              <div style={{
                fontFamily: FONTS.serif, fontStyle: 'italic',
                fontSize: 13, color: C.muted, lineHeight: 1.5, marginBottom: 20,
              }}>{tool.sub}</div>

              <div style={{
                display: 'inline-block',
                padding: '4px 12px',
                background: 'rgba(201,162,39,0.08)',
                border: `1px solid ${C.brass}30`,
                borderRadius: 3,
                fontFamily: FONTS.body, fontSize: 9,
                letterSpacing: 4, color: C.brass,
              }}>{tool.tag}</div>

              <Grain opacity={0.03} id={`sg${i}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
