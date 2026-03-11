import { useState, useRef } from 'react'
import { IronRanch, NeonFrontier, GildedDark } from '../components/Templates'
import { C, FONTS, SUNSET, BRASS_GRAD } from '../components/tokens'
import PageHeader from '../components/PageHeader'

const PLATFORMS = [
  { id: 'youtube', label: 'YouTube',  size: '1280×720',  w: 1280, h: 720  },
  { id: 'tiktok',  label: 'TikTok',   size: '720×1280',  w: 720,  h: 1280 },
  { id: 'kick',    label: 'Kick',     size: '1280×720',  w: 1280, h: 720  },
  { id: 'xcard',   label: 'X Card',   size: '1200×628',  w: 1200, h: 628  },
]

const TEMPLATES = [
  { id: 'ranch',    label: 'Iron Ranch',    sub: 'Walnut & Brass',    component: IronRanch    },
  { id: 'neon',     label: 'Neon Frontier', sub: 'Sunset Cyberpunk',  component: NeonFrontier },
  { id: 'gilded',   label: 'Gilded Dark',   sub: 'Outlined & Raw',    component: GildedDark   },
]

function Field({ label, value, onChange, hint }) {
  const [focus, setFocus] = useState(false)
  return (
    <div style={{ marginBottom: 18 }}>
      <label style={{
        display: 'block', fontFamily: FONTS.body,
        fontSize: 9, letterSpacing: 4, textTransform: 'uppercase',
        color: focus ? C.brass : C.muted, marginBottom: 6,
        transition: 'color 0.15s',
      }}>{label}</label>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: '100%', padding: '9px 14px',
          background: C.bgDeep,
          border: `1px solid ${focus ? C.brass + '50' : C.border}`,
          borderRadius: 4, color: C.cream,
          fontSize: 14, fontFamily: FONTS.body,
          outline: 'none', transition: 'border-color 0.15s',
        }}
      />
      {hint && <div style={{ fontSize: 10, color: C.dim, marginTop: 4, fontFamily: FONTS.serif, fontStyle: 'italic' }}>{hint}</div>}
    </div>
  )
}

export default function ClipLab() {
  const [platform, setPlatform] = useState('youtube')
  const [template, setTemplate] = useState('ranch')
  const [title, setTitle]       = useState('ROAD HOUSE')
  const [subtitle, setSubtitle] = useState('The Movement Starts Here')
  const [tag, setTag]           = useState('CREATOR ECONOMY')
  const [exporting, setExporting] = useState(false)
  const canvasRef = useRef(null)

  const ActiveTemplate = TEMPLATES.find(t => t.id === template).component
  const activePlatform = PLATFORMS.find(p => p.id === platform)
  const scale = Math.min(660 / activePlatform.w, platform === 'tiktok' ? 0.36 : 0.52)

  const handleExport = async () => {
    setExporting(true)
    try {
      const html2canvas = (await import('html2canvas')).default
      const canvas = await html2canvas(canvasRef.current, {
        width: activePlatform.w,
        height: activePlatform.h,
        scale: 1, useCORS: true, backgroundColor: null,
      })
      const link = document.createElement('a')
      link.download = `roadhouse-${template}-${platform}-${Date.now()}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (e) { console.error(e) }
    setExporting(false)
  }

  const ExportBtn = (
    <button onClick={handleExport} disabled={exporting} style={{
      padding: '12px 28px',
      background: exporting ? C.bgCard : SUNSET,
      border: 'none', borderRadius: 4,
      color: exporting ? C.muted : '#0D0A06',
      fontFamily: FONTS.display, fontSize: 18, letterSpacing: 4,
      cursor: exporting ? 'wait' : 'pointer',
      boxShadow: exporting ? 'none' : '0 4px 24px rgba(255,107,53,0.3)',
      transition: 'all 0.2s', flexShrink: 0,
    }}>
      {exporting ? 'RENDERING...' : '↓ EXPORT PNG'}
    </button>
  )

  return (
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowY: 'auto', background: C.bg }}>
      <PageHeader
        section="Studio · Clip Lab"
        title="CLIP"
        titleAccent="LAB"
        subtitle="Thumbnail & asset builder for every platform"
        action={ExportBtn}
      />

      <div style={{ display: 'flex', flex: 1 }}>
        {/* Controls */}
        <div style={{
          width: 268, flexShrink: 0,
          borderRight: `1px solid ${C.border}`,
          padding: '28px 22px',
        }}>
          {/* Platform */}
          <div style={{ marginBottom: 28 }}>
            <div style={{
              fontFamily: FONTS.body, fontSize: 9, letterSpacing: 4,
              textTransform: 'uppercase', color: C.muted, marginBottom: 12,
            }}>Platform</div>
            {PLATFORMS.map(p => (
              <button key={p.id} onClick={() => setPlatform(p.id)} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                width: '100%', padding: '9px 14px', marginBottom: 5,
                background: platform === p.id ? 'rgba(201,162,39,0.07)' : 'transparent',
                border: `1px solid ${platform === p.id ? C.brass + '50' : C.border}`,
                borderRadius: 20,
                color: platform === p.id ? C.brass : C.muted,
                fontFamily: FONTS.body, fontSize: 12, letterSpacing: 1,
                cursor: 'pointer', transition: 'all 0.15s',
              }}>
                <span style={{ fontWeight: platform === p.id ? 700 : 400 }}>{p.label}</span>
                <span style={{ fontSize: 10, opacity: 0.5 }}>{p.size}</span>
              </button>
            ))}
          </div>

          <div style={{ height: 1, background: C.border, marginBottom: 28 }} />

          {/* Template */}
          <div style={{ marginBottom: 28 }}>
            <div style={{
              fontFamily: FONTS.body, fontSize: 9, letterSpacing: 4,
              textTransform: 'uppercase', color: C.muted, marginBottom: 12,
            }}>Template</div>
            {TEMPLATES.map(t => (
              <button key={t.id} onClick={() => setTemplate(t.id)} style={{
                display: 'flex', flexDirection: 'column',
                width: '100%', padding: '10px 14px', marginBottom: 5,
                background: template === t.id
                  ? 'linear-gradient(90deg, rgba(255,107,53,0.08), rgba(255,60,172,0.04))'
                  : 'transparent',
                border: `1px solid ${template === t.id ? 'rgba(255,107,53,0.3)' : C.border}`,
                borderLeft: template === t.id ? `2px solid ${C.sunsetA}` : `2px solid transparent`,
                borderRadius: 4,
                color: template === t.id ? C.cream : C.muted,
                fontFamily: FONTS.body, fontSize: 13, letterSpacing: 1,
                cursor: 'pointer', transition: 'all 0.15s', textAlign: 'left',
              }}>
                <span style={{ fontWeight: template === t.id ? 700 : 400, textTransform: 'uppercase' }}>{t.label}</span>
                <span style={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontSize: 11, color: C.dim, marginTop: 2 }}>{t.sub}</span>
              </button>
            ))}
          </div>

          <div style={{ height: 1, background: C.border, marginBottom: 28 }} />

          {/* Text */}
          <Field label="Title"    value={title}    onChange={setTitle}    hint="Spaces create line breaks" />
          <Field label="Subtitle" value={subtitle} onChange={setSubtitle} />
          <Field label="Tag"      value={tag}      onChange={setTag} />
        </div>

        {/* Preview */}
        <div style={{ flex: 1, padding: '32px 40px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          {/* Platform badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              fontFamily: FONTS.body, fontSize: 10, letterSpacing: 4,
              color: C.brass, textTransform: 'uppercase',
            }}>
              {activePlatform.label} · {activePlatform.size}
            </div>
            <div style={{ flex: 1, height: 1, background: C.border }} />
            <div style={{ fontFamily: FONTS.serif, fontStyle: 'italic', fontSize: 12, color: C.dim }}>
              {TEMPLATES.find(t => t.id === template)?.label}
            </div>
          </div>

          {/* Canvas */}
          <div style={{
            background: C.bgDeep,
            border: `1px solid ${C.border}`,
            borderRadius: 8,
            padding: 28,
            display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
            overflow: 'hidden', minHeight: 380,
          }}>
            <div style={{
              transform: `scale(${scale})`,
              transformOrigin: 'top center',
              width: activePlatform.w, height: activePlatform.h,
              marginBottom: -(activePlatform.h * (1 - scale)),
            }}>
              <div ref={canvasRef}>
                <ActiveTemplate title={title} subtitle={subtitle} tag={tag} platform={platform} />
              </div>
            </div>
          </div>

          {/* Quick platform pills */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {PLATFORMS.map(p => (
              <button key={p.id} onClick={() => setPlatform(p.id)} style={{
                padding: '6px 16px',
                background: platform === p.id ? 'rgba(201,162,39,0.1)' : C.bgCard,
                border: `1px solid ${platform === p.id ? C.brass + '40' : C.border}`,
                borderRadius: 20,
                color: platform === p.id ? C.brass : C.muted,
                fontFamily: FONTS.body, fontSize: 12, letterSpacing: 1,
                cursor: 'pointer', transition: 'all 0.15s',
              }}>
                {p.label} · {p.size}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
