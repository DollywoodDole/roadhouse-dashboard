// RoadHouse Design System v2
// Gucci × Yellowstone × Cyberpunk Studio

export const C = {
  // Walnut darks
  bg:         '#0D0A06',
  bgDeep:     '#080604',
  bgPanel:    '#110D08',
  bgCard:     '#161009',
  bgCardHi:   '#1C1510',
  border:     '#2A2018',
  borderHi:   '#3D3020',
  borderGlow: '#C9A22740',

  // Brass & gold
  brass:      '#C9A227',
  brassLight: '#E2C060',
  brassDim:   '#C9A22720',
  brassGlow:  '#C9A22780',

  // Neon sunset
  sunsetA:    '#FF6B35',   // orange
  sunsetB:    '#FF3CAC',   // magenta
  sunsetC:    '#F7971E',   // amber
  sunsetD:    '#784BA0',   // violet
  neonCoral:  '#FF5E62',

  // Neutrals
  white:      '#F5EFE0',
  cream:      '#E8DCC8',
  muted:      '#8A7A60',
  dim:        '#4A3E2C',
  ghost:      '#2A2018',
}

export const FONTS = {
  display:  "'Bebas Neue', Impact, sans-serif",
  serif:    "'Cormorant Garamond', Georgia, serif",
  elegant:  "'Playfair Display', Georgia, serif",
  body:     "'Barlow Condensed', sans-serif",
}

// Neon sunset gradient (reusable)
export const SUNSET = `linear-gradient(135deg, ${C.sunsetC} 0%, ${C.sunsetA} 40%, ${C.sunsetB} 100%)`
export const SUNSET_TEXT = `linear-gradient(90deg, ${C.sunsetC}, ${C.sunsetA}, ${C.sunsetB})`
export const BRASS_GRAD = `linear-gradient(135deg, #C9A227, #E2C060, #C9A227)`

// Grain texture SVG component
export const Grain = ({ opacity = 0.03, id = 'g' }) => (
  <svg
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity, pointerEvents: 'none', zIndex: 9 }}
    aria-hidden="true"
  >
    <filter id={id}>
      <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter={`url(#${id})`} />
  </svg>
)

// Scanline texture for cyberpunk panels
export const Scanlines = ({ opacity = 0.04 }) => (
  <div style={{
    position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 8,
    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
    opacity,
  }} />
)
