import { useState } from 'react'
import { C, FONTS, SUNSET, BRASS_GRAD, Grain } from '../components/tokens'
import PageHeader from '../components/PageHeader'

const TIERS = [
  {
    name: 'ALIGNED',
    sub: 'Brand partnership',
    icon: '◆',
    items: ['Co-branded content', 'Shared audience access', 'RoadHouse endorsement', 'Campaign integration'],
  },
  {
    name: 'EMBEDDED',
    sub: 'Deep collaboration',
    icon: '◈',
    items: ['All Aligned benefits', 'Exclusive content series', 'Community integration', 'Revenue share model'],
  },
  {
    name: 'FOUNDING',
    sub: 'Movement partner',
    icon: '⬡',
    items: ['All Embedded benefits', 'Co-ownership of initiatives', 'Advisory positioning', 'Founding recognition'],
  },
]

const PROSPECTS = [
  { name: 'Pending Outreach', category: 'Technology',  status: 'prospect', value: '—'     },
  { name: 'Pending Outreach', category: 'Apparel',     status: 'prospect', value: '—'     },
  { name: 'Pending Outreach', category: 'Equipment',   status: 'prospect', value: '—'     },
]

export default function Partnerships() {
  const [activeTab, setActiveTab] = useState('tiers')

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto', background: C.bg }}>
      <PageHeader
        section="Network · Brand & Collab"
        title="PARTNER"
        titleAccent="SHIPS"
        subtitle="Brand alignment, collaboration tiers, and deal tracking"
      />

      {/* Tabs */}
      <div style={{
        display: 'flex', gap: 0,
        borderBottom: `1px solid ${C.border}`,
        padding: '0 44px',
      }}>
        {['tiers', 'pipeline', 'deck'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} style={{
            padding: '16px 24px',
            background: 'transparent',
            border: 'none',
            borderBottom: `2px solid ${activeTab === tab ? C.brass : 'transparent'}`,
            color: activeTab === tab ? C.brass : C.muted,
            fontFamily: FONTS.display, fontSize: 16, letterSpacing: 4,
            cursor: 'pointer', transition: 'all 0.15s',
            textTransform: 'uppercase',
          }}>{tab}</button>
        ))}
      </div>

      <div style={{ padding: '40px 44px' }}>

        {activeTab === 'tiers' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
            {TIERS.map((tier, i) => (
              <div key={i} style={{
                background: C.bgCard,
                border: `1px solid ${i === 1 ? C.brass + '50' : C.border}`,
                borderRadius: 8, overflow: 'hidden',
                position: 'relative',
                boxShadow: i === 1 ? `0 0 40px rgba(201,162,39,0.08)` : 'none',
              }}>
                <div style={{
                  height: 3,
                  background: i === 0 ? SUNSET : i === 1 ? BRASS_GRAD : `linear-gradient(135deg, #784BA0, #FF3CAC)`,
                }} />
                {i === 1 && (
                  <div style={{
                    position: 'absolute', top: 12, right: 12,
                    padding: '2px 10px',
                    background: 'rgba(201,162,39,0.1)',
                    border: `1px solid ${C.brass}40`,
                    borderRadius: 2,
                    fontFamily: FONTS.body, fontSize: 8, letterSpacing: 4,
                    color: C.brass, textTransform: 'uppercase',
                  }}>FEATURED</div>
                )}

                <div style={{ padding: '28px 24px' }}>
                  <div style={{ fontSize: 32, marginBottom: 12,
                    background: i === 1 ? BRASS_GRAD : SUNSET,
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  }}>{tier.icon}</div>

                  <div style={{ fontFamily: FONTS.display, fontSize: 26, letterSpacing: 4, color: C.white, marginBottom: 4 }}>
                    {tier.name}
                  </div>
                  <div style={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontSize: 14, color: C.muted, marginBottom: 24 }}>
                    {tier.sub}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {tier.items.map((item, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{
                          width: 4, height: 4, borderRadius: '50%',
                          background: i === 1 ? C.brass : C.sunsetA, flexShrink: 0,
                        }} />
                        <span style={{ fontFamily: FONTS.body, fontSize: 13, color: C.muted, letterSpacing: 0.5 }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <button style={{
                    width: '100%', marginTop: 28, padding: '12px',
                    background: i === 1 ? BRASS_GRAD : 'transparent',
                    border: `1px solid ${i === 1 ? 'transparent' : C.border}`,
                    borderRadius: 4,
                    color: i === 1 ? '#0D0A06' : C.muted,
                    fontFamily: FONTS.display, fontSize: 14, letterSpacing: 4,
                    cursor: 'pointer', transition: 'all 0.2s',
                    textTransform: 'uppercase',
                  }}>Inquire</button>
                </div>
                <Grain opacity={0.03} id={`pt${i}`} />
              </div>
            ))}
          </div>
        )}

        {activeTab === 'pipeline' && (
          <div>
            <div style={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontSize: 16, color: C.muted, marginBottom: 28 }}>
              Track your brand pipeline from prospect to signed.
            </div>
            <div style={{ border: `1px solid ${C.border}`, borderRadius: 8, overflow: 'hidden' }}>
              <div style={{
                display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr',
                padding: '12px 20px', background: C.bgCard,
                borderBottom: `1px solid ${C.border}`,
                fontFamily: FONTS.body, fontSize: 9, letterSpacing: 4, color: C.dim, textTransform: 'uppercase',
              }}>
                <span>Partner</span><span>Category</span><span>Value</span><span>Status</span>
              </div>
              {PROSPECTS.map((p, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr',
                  padding: '16px 20px',
                  borderBottom: i < PROSPECTS.length - 1 ? `1px solid ${C.border}` : 'none',
                  background: i % 2 === 0 ? C.bgPanel : C.bg,
                }}>
                  <span style={{ fontFamily: FONTS.body, fontSize: 14, color: C.muted, fontStyle: 'italic' }}>{p.name}</span>
                  <span style={{ fontFamily: FONTS.body, fontSize: 13, color: C.muted }}>{p.category}</span>
                  <span style={{ fontFamily: FONTS.display, fontSize: 16, color: C.dim }}>{p.value}</span>
                  <span style={{
                    display: 'inline-block', alignSelf: 'center',
                    padding: '3px 10px',
                    background: 'rgba(201,162,39,0.08)', border: `1px solid ${C.brass}30`,
                    borderRadius: 3,
                    fontFamily: FONTS.body, fontSize: 9, letterSpacing: 3, color: C.brass, textTransform: 'uppercase',
                  }}>{p.status}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'deck' && (
          <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', padding: '60px 0', gap: 20,
          }}>
            <div style={{ fontSize: 48, background: BRASS_GRAD, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>◆</div>
            <div style={{ fontFamily: FONTS.display, fontSize: 32, letterSpacing: 6, color: C.cream }}>PARTNERSHIP DECK</div>
            <div style={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontSize: 16, color: C.muted, textAlign: 'center', maxWidth: 400 }}>
              Auto-generated pitch deck builder coming soon. Your brand story, formatted for partners.
            </div>
            <div style={{
              padding: '10px 24px',
              background: 'rgba(201,162,39,0.08)',
              border: `1px solid ${C.brass}30`,
              borderRadius: 3,
              fontFamily: FONTS.body, fontSize: 10, letterSpacing: 4, color: C.brass,
            }}>COMING SOON</div>
          </div>
        )}
      </div>
    </div>
  )
}
