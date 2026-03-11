import { C, FONTS, Grain, SUNSET, BRASS_GRAD } from './tokens'

const NAV = [
  {
    section: 'STUDIO',
    items: [
      { id: 'stream',       label: 'Stream Studio',  icon: '◈', sub: 'Live Production'    },
      { id: 'cliplab',      label: 'Clip Lab',        icon: '▣', sub: 'Thumbnails & Assets' },
      { id: 'marketing',    label: 'Marketing',       icon: '◉', sub: 'Campaigns & Copy'   },
    ]
  },
  {
    section: 'NETWORK',
    items: [
      { id: 'community',    label: 'Community',       icon: '◫', sub: 'Discord & Socials'  },
      { id: 'partnerships', label: 'Partnerships',    icon: '◆', sub: 'Brand & Collab'     },
    ]
  },
]

export default function Sidebar({ active, setActive }) {
  return (
    <div style={{
      width: 240,
      minHeight: '100vh',
      background: C.bgPanel,
      borderRight: `1px solid ${C.border}`,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      flexShrink: 0,
      overflow: 'hidden',
    }}>
      <Grain opacity={0.04} id="sidebar-grain" />

      {/* Top ambient glow */}
      <div style={{
        position: 'absolute', top: -80, left: -40,
        width: 280, height: 280,
        background: 'radial-gradient(circle, rgba(201,162,39,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Logo mark */}
      <div style={{
        padding: '28px 24px 24px',
        borderBottom: `1px solid ${C.border}`,
        position: 'relative',
      }}>
        {/* Brass top accent line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 2,
          background: BRASS_GRAD,
        }} />

        <div style={{
          fontFamily: FONTS.display,
          fontSize: 28, letterSpacing: 7,
          background: BRASS_GRAD,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>ROADHOUSE</div>

        <div style={{
          fontFamily: FONTS.serif,
          fontStyle: 'italic',
          fontSize: 12, color: C.muted,
          marginTop: 4, letterSpacing: 1,
        }}>Command Center</div>

        {/* Live indicator */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 6,
          marginTop: 14,
        }}>
          <div style={{
            width: 6, height: 6, borderRadius: '50%',
            background: C.sunsetA,
            boxShadow: `0 0 8px ${C.sunsetA}, 0 0 16px ${C.sunsetA}80`,
            animation: 'pulse 2s infinite',
          }} />
          <span style={{
            fontFamily: FONTS.body, fontSize: 10,
            letterSpacing: 4, color: C.muted, textTransform: 'uppercase',
          }}>247 Active</span>
        </div>
      </div>

      {/* Nav sections */}
      <nav style={{ padding: '20px 16px', flex: 1 }}>
        {NAV.map(group => (
          <div key={group.section} style={{ marginBottom: 28 }}>
            <div style={{
              fontFamily: FONTS.body, fontSize: 9,
              letterSpacing: 4, textTransform: 'uppercase',
              color: C.dim, marginBottom: 8, paddingLeft: 10,
            }}>{group.section}</div>

            {group.items.map(item => {
              const isActive = active === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => setActive(item.id)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    width: '100%', padding: '10px 10px',
                    marginBottom: 2,
                    background: isActive
                      ? 'linear-gradient(90deg, rgba(201,162,39,0.08), rgba(255,107,53,0.05))'
                      : 'transparent',
                    border: isActive
                      ? `1px solid ${C.border}`
                      : '1px solid transparent',
                    borderLeft: isActive ? `2px solid ${C.brass}` : '2px solid transparent',
                    borderRadius: 6,
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {isActive && (
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(90deg, rgba(201,162,39,0.04), transparent)',
                      pointerEvents: 'none',
                    }} />
                  )}

                  <span style={{
                    fontSize: 15,
                    color: isActive ? C.brass : C.dim,
                    transition: 'color 0.2s',
                  }}>{item.icon}</span>

                  <div>
                    <div style={{
                      fontFamily: FONTS.body,
                      fontSize: 13, letterSpacing: 1,
                      fontWeight: isActive ? 700 : 400,
                      textTransform: 'uppercase',
                      color: isActive ? C.cream : C.muted,
                      transition: 'color 0.2s',
                    }}>{item.label}</div>
                    <div style={{
                      fontFamily: FONTS.serif,
                      fontStyle: 'italic',
                      fontSize: 10, color: C.dim,
                      marginTop: 1,
                    }}>{item.sub}</div>
                  </div>
                </button>
              )
            })}
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div style={{
        padding: '18px 24px',
        borderTop: `1px solid ${C.border}`,
      }}>
        <div style={{
          fontFamily: FONTS.serif,
          fontStyle: 'italic',
          fontSize: 12, color: C.dim,
          lineHeight: 1.6,
        }}>
          "Saskatchewan-born.<br />Worldwide standard."
        </div>
        <div style={{
          marginTop: 10,
          fontFamily: FONTS.body,
          fontSize: 9, letterSpacing: 4,
          color: C.ghost, textTransform: 'uppercase',
        }}>RH · 01 · v2.0</div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}
