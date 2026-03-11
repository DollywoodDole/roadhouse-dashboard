import { C, FONTS, SUNSET, Grain } from '../components/tokens'
import PageHeader from '../components/PageHeader'

const PLATFORMS = [
  {
    name: 'DISCORD',
    handle: 'RoadHouse Server',
    members: '247',
    icon: '◈',
    color: '#5865F2',
    tools: ['Server Banner', 'Role Cards', 'Announcement Templates', 'Welcome Message'],
  },
  {
    name: 'TIKTOK',
    handle: '@roadhouse',
    members: '—',
    icon: '▣',
    color: '#FF3CAC',
    tools: ['Profile Banner', 'Video Thumbnails', 'Bio Templates', 'Pinned Post'],
  },
  {
    name: 'KICK',
    handle: 'RoadHouse',
    members: '—',
    icon: '◉',
    color: '#53FC18',
    tools: ['Stream Banner', 'Panels', 'Schedule Graphic', 'Sub Badge'],
  },
  {
    name: 'X',
    handle: '@roadhouse',
    members: '—',
    icon: '◆',
    color: '#E8DCC8',
    tools: ['Header Banner', 'Profile Avatar', 'Thread Templates', 'Pinned Tweet'],
  },
]

export default function Community() {
  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto', background: C.bg }}>
      <PageHeader
        section="Network · Discord & Socials"
        title="COMMUNITY"
        titleAccent="HUB"
        subtitle="Manage your presence across every platform from one place"
      />

      <div style={{ padding: '40px 44px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          {PLATFORMS.map((p, i) => (
            <div key={i} style={{
              background: C.bgCard,
              border: `1px solid ${C.border}`,
              borderRadius: 8, overflow: 'hidden',
              position: 'relative',
            }}>
              {/* Color top bar */}
              <div style={{
                height: 3, background: p.color,
                boxShadow: `0 0 12px ${p.color}60`,
              }} />

              <div style={{ padding: '24px 24px 20px', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div>
                    <div style={{
                      fontFamily: FONTS.display, fontSize: 24,
                      letterSpacing: 4, color: C.white, marginBottom: 4,
                    }}>{p.name}</div>
                    <div style={{
                      fontFamily: FONTS.serif, fontStyle: 'italic',
                      fontSize: 13, color: C.muted,
                    }}>{p.handle}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontFamily: FONTS.display, fontSize: 28,
                      background: SUNSET, WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>{p.members}</div>
                    <div style={{ fontFamily: FONTS.body, fontSize: 9, letterSpacing: 3, color: C.dim, textTransform: 'uppercase' }}>
                      members
                    </div>
                  </div>
                </div>

                {/* Tool list */}
                <div style={{
                  borderTop: `1px solid ${C.border}`, paddingTop: 16,
                  display: 'flex', flexDirection: 'column', gap: 6,
                }}>
                  {p.tools.map((tool, j) => (
                    <div key={j} style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '8px 12px',
                      background: C.bgPanel,
                      border: `1px solid ${C.border}`,
                      borderRadius: 4,
                      cursor: 'pointer',
                      transition: 'border-color 0.15s',
                    }}>
                      <span style={{ fontFamily: FONTS.body, fontSize: 13, color: C.muted, letterSpacing: 1 }}>{tool}</span>
                      <span style={{
                        fontFamily: FONTS.body, fontSize: 8, letterSpacing: 3,
                        color: C.dim, textTransform: 'uppercase',
                        padding: '2px 8px', background: C.bgDeep,
                        border: `1px solid ${C.border}`, borderRadius: 2,
                      }}>SOON</span>
                    </div>
                  ))}
                </div>
              </div>
              <Grain opacity={0.03} id={`cm${i}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
