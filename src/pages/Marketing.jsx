import { C, FONTS, SUNSET, BRASS_GRAD, Grain } from '../components/tokens'
import PageHeader from '../components/PageHeader'

const CAMPAIGNS = [
  { platform: 'DISCORD',  type: 'Announcement',    status: 'draft',   label: 'Server Growth Push' },
  { platform: 'TIKTOK',   type: 'Content Series',  status: 'planned', label: '#RoadHouseCode' },
  { platform: 'X',        type: 'Thread',          status: 'planned', label: 'Movement Manifesto' },
  { platform: 'KICK',     type: 'Stream Promo',    status: 'draft',   label: 'Launch Stream' },
]

const COPY_TEMPLATES = [
  { label: 'Launch Hook',       platform: 'All Platforms',  preview: 'You already know the standard. RoadHouse just made it visible...' },
  { label: 'Community CTA',     platform: 'Discord',        preview: 'Standards are silent. But they\'re always watching. Are you in...' },
  { label: 'Creator Manifesto', platform: 'X / TikTok',     preview: 'We don\'t chase algorithms. We build movements...' },
  { label: 'Partnership Pitch', platform: 'DM / Email',     preview: 'RoadHouse isn\'t a brand deal. It\'s an alignment...' },
]

const STATUS_COLORS = {
  draft:   { bg: 'rgba(201,162,39,0.08)', border: 'rgba(201,162,39,0.3)', color: '#C9A227' },
  planned: { bg: 'rgba(255,107,53,0.06)', border: 'rgba(255,107,53,0.25)', color: '#FF8C60' },
  live:    { bg: 'rgba(80,200,80,0.08)',  border: 'rgba(80,200,80,0.3)',   color: '#60C060' },
}

export default function Marketing() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto', background: C.bg }}>
      <PageHeader
        section="Studio · Campaigns & Copy"
        title="MARKETING"
        titleAccent="HUB"
        subtitle="Campaign tracker, copy templates, and platform strategy"
      />

      <div style={{ padding: '40px 44px', display: 'flex', flexDirection: 'column', gap: 40 }}>

        {/* Campaign tracker */}
        <div>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20,
          }}>
            <div style={{ fontFamily: FONTS.display, fontSize: 22, letterSpacing: 4, color: C.cream }}>
              ACTIVE CAMPAIGNS
            </div>
            <div style={{
              padding: '6px 16px',
              background: SUNSET, borderRadius: 3,
              fontFamily: FONTS.display, fontSize: 13, letterSpacing: 3,
              color: '#0D0A06', cursor: 'pointer',
            }}>+ NEW</div>
          </div>

          <div style={{
            border: `1px solid ${C.border}`,
            borderRadius: 8, overflow: 'hidden',
          }}>
            {/* Header row */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1.5fr 1fr 1fr',
              padding: '12px 20px',
              background: C.bgCard,
              borderBottom: `1px solid ${C.border}`,
              fontFamily: FONTS.body, fontSize: 9, letterSpacing: 4,
              color: C.dim, textTransform: 'uppercase',
            }}>
              <span>Platform</span>
              <span>Campaign</span>
              <span>Type</span>
              <span>Status</span>
            </div>

            {CAMPAIGNS.map((c, i) => {
              const sc = STATUS_COLORS[c.status] || STATUS_COLORS.draft
              return (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '1fr 1.5fr 1fr 1fr',
                  padding: '16px 20px',
                  borderBottom: i < CAMPAIGNS.length - 1 ? `1px solid ${C.border}` : 'none',
                  background: i % 2 === 0 ? C.bgPanel : C.bg,
                  transition: 'background 0.15s',
                }}>
                  <div style={{
                    fontFamily: FONTS.display, fontSize: 14, letterSpacing: 3,
                    background: SUNSET, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  }}>{c.platform}</div>
                  <div style={{ fontFamily: FONTS.body, fontSize: 14, color: C.cream, letterSpacing: 1 }}>{c.label}</div>
                  <div style={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontSize: 13, color: C.muted }}>{c.type}</div>
                  <div>
                    <span style={{
                      padding: '3px 10px',
                      background: sc.bg, border: `1px solid ${sc.border}`,
                      borderRadius: 3,
                      fontFamily: FONTS.body, fontSize: 9,
                      letterSpacing: 3, color: sc.color, textTransform: 'uppercase',
                    }}>{c.status}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Copy templates */}
        <div>
          <div style={{ fontFamily: FONTS.display, fontSize: 22, letterSpacing: 4, color: C.cream, marginBottom: 20 }}>
            COPY VAULT
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {COPY_TEMPLATES.map((t, i) => (
              <div key={i} style={{
                background: C.bgCard, border: `1px solid ${C.border}`,
                borderRadius: 8, padding: '24px 22px',
                position: 'relative', overflow: 'hidden',
                cursor: 'pointer',
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: 2,
                  background: i % 2 === 0 ? SUNSET : BRASS_GRAD,
                }} />
                <div style={{
                  fontFamily: FONTS.body, fontSize: 9, letterSpacing: 4,
                  color: C.muted, textTransform: 'uppercase', marginBottom: 8,
                }}>{t.platform}</div>
                <div style={{
                  fontFamily: FONTS.display, fontSize: 18, letterSpacing: 3,
                  color: C.cream, marginBottom: 10,
                }}>{t.label}</div>
                <div style={{
                  fontFamily: FONTS.serif, fontStyle: 'italic',
                  fontSize: 13, color: C.muted, lineHeight: 1.6,
                }}>{t.preview}</div>
                <div style={{
                  marginTop: 16,
                  fontFamily: FONTS.body, fontSize: 9, letterSpacing: 4,
                  color: C.dim, textTransform: 'uppercase',
                }}>CLICK TO EXPAND →</div>
                <Grain opacity={0.03} id={`mk${i}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
