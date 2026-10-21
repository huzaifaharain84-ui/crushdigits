import { HERO_PHOTO } from '../data/heroImage.js'

// Office reception wall with the Crush Digits logo (rendered scene).
// Drop a real photo in /public and set HERO_PHOTO to use it instead.
const leaves = [
  { r: 0, h: 118, w: 17, x: 0 },
  { r: -24, h: 104, w: 16, x: -6 },
  { r: 24, h: 104, w: 16, x: 6 },
  { r: -48, h: 86, w: 14, x: -10 },
  { r: 48, h: 86, w: 14, x: 10 },
  { r: -70, h: 62, w: 12, x: -12 },
  { r: 70, h: 62, w: 12, x: 12 },
]

function Plant({ shadow = false }) {
  return (
    <g>
      {leaves.map((l, i) => (
        <ellipse
          key={i}
          cx={l.x}
          cy={-l.h / 2 + 4}
          rx={l.w}
          ry={l.h / 2}
          transform={`rotate(${l.r})`}
          fill={shadow ? '#000' : i % 2 ? 'url(#hs-leaf2)' : 'url(#hs-leaf1)'}
        />
      ))}
    </g>
  )
}

export default function HeroScene() {
  if (HERO_PHOTO) {
    return (
      <img
        src={HERO_PHOTO}
        alt="Crush Digits Accountants office"
        className="hero-photo"
      />
    )
  }

  return (
    <svg
      className="hero-scene"
      viewBox="0 0 700 580"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Crush Digits Accountants office reception with the company logo on the wall"
    >
      <defs>
        <linearGradient id="hs-wall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f4f2ec" />
          <stop offset="0.65" stopColor="#e4e0d7" />
          <stop offset="1" stopColor="#cfcabf" />
        </linearGradient>
        <linearGradient id="hs-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cfcac0" />
          <stop offset="0.5" stopColor="#b3aea3" />
          <stop offset="1" stopColor="#8f8b81" />
        </linearGradient>
        <radialGradient id="hs-spot" cx="0.5" cy="0" r="0.9">
          <stop offset="0" stopColor="#fffbe6" stopOpacity="0.85" />
          <stop offset="0.5" stopColor="#fff3c9" stopOpacity="0.25" />
          <stop offset="1" stopColor="#fff3c9" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hs-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f3fbf6" />
          <stop offset="1" stopColor="#bcd9c8" />
        </linearGradient>
        <linearGradient id="hs-beam" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff6d6" stopOpacity="0.5" />
          <stop offset="1" stopColor="#fff6d6" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hs-leaf1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#1f7a2a" />
          <stop offset="1" stopColor="#3fae3a" />
        </linearGradient>
        <linearGradient id="hs-leaf2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#14602a" />
          <stop offset="1" stopColor="#2c8f33" />
        </linearGradient>
        <linearGradient id="hs-pot" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#bdb9b0" />
          <stop offset="0.45" stopColor="#f1efe9" />
          <stop offset="1" stopColor="#a9a59c" />
        </linearGradient>
        <linearGradient id="hs-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="hs-oak" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#c59c68" />
          <stop offset="0.5" stopColor="#dbb888" />
          <stop offset="1" stopColor="#b98e5a" />
        </linearGradient>
        <linearGradient id="hs-plate" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#ece9e2" />
        </linearGradient>
        <filter id="hs-drop" x="-20%" y="-30%" width="140%" height="170%">
          <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#2b2218" floodOpacity="0.38" />
        </filter>
        <filter id="hs-logo-shadow" x="-10%" y="-20%" width="125%" height="150%">
          <feDropShadow dx="1.5" dy="3" stdDeviation="2.2" floodColor="#1c3a22" floodOpacity="0.4" />
        </filter>
        <filter id="hs-noise" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="4" />
          <feColorMatrix values="0 0 0 0 0.35  0 0 0 0 0.3  0 0 0 0 0.25  0 0 0 0.10 0" />
        </filter>
        <filter id="hs-blur6" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="hs-blur3" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
        <filter id="hs-blur-soft" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
        <filter id="hs-dark">
          <feColorMatrix values="0.16 0 0 0 0  0 0.2 0 0 0  0 0 0.16 0 0  0 0 0 1 0" />
        </filter>
        <filter id="hs-glow" x="-20%" y="-30%" width="140%" height="160%">
          <feDropShadow dx="0" dy="0" stdDeviation="7" floodColor="#4da9ff" floodOpacity="0.42" />
        </filter>
      </defs>

      {/* back wall */}
      <rect width="700" height="450" fill="url(#hs-wall)" />
      <rect width="700" height="450" filter="url(#hs-noise)" />
      {/* ceiling downlights washing the wall */}
      <ellipse cx="250" cy="0" rx="150" ry="300" fill="url(#hs-spot)" />
      <ellipse cx="470" cy="0" rx="150" ry="300" fill="url(#hs-spot)" />
      <g fill="#fffbe8">
        <ellipse cx="250" cy="6" rx="16" ry="4" />
        <ellipse cx="470" cy="6" rx="16" ry="4" />
      </g>
      {/* oak slat feature wall behind the logo */}
      <g filter="url(#hs-drop)">
        <rect x="140" y="70" width="470" height="210" fill="url(#hs-oak)" />
      </g>
      {Array.from({ length: 47 }, (_, i) => (
        <g key={i}>
          <rect x={140 + i * 10} y="70" width="7" height="210" fill={i % 3 === 0 ? '#a47a48' : i % 3 === 1 ? '#d3ad7b' : '#bd9460'} opacity="0.55" />
          <rect x={147 + i * 10} y="70" width="3" height="210" fill="#2b1d0e" opacity="0.35" />
        </g>
      ))}
      <rect x="140" y="70" width="470" height="210" fill="url(#hs-spot)" opacity="0.55" />
      {/* white backing plate */}
      <rect x="170" y="108" width="410" height="146" rx="6" fill="url(#hs-plate)" filter="url(#hs-drop)" />
      <rect x="170" y="108" width="410" height="146" rx="6" fill="none" stroke="#ffffff" strokeOpacity="0.9" />

      {/* mounted logo */}
      <g filter="url(#hs-logo-shadow)">
        <image href="/cd-mark.png" x="196" y="154" width="124" height="63" />
        <image href="/logo-wordmark.png" x="338" y="143" width="222" height="55" />
      </g>

      {/* window with daylight */}
      <rect x="610" y="30" width="140" height="420" fill="url(#hs-glass)" />
      <g fill="#7ea58f" opacity="0.5">
        <rect x="622" y="300" width="24" height="150" />
        <rect x="652" y="262" width="32" height="188" />
        <rect x="692" y="318" width="22" height="132" />
      </g>
      <rect x="610" y="30" width="140" height="420" fill="none" stroke="#e9e6df" strokeWidth="7" />
      <line x1="680" y1="30" x2="680" y2="450" stroke="#e9e6df" strokeWidth="5" />
      <line x1="610" y1="200" x2="750" y2="200" stroke="#e9e6df" strokeWidth="5" />
      {/* light beams from the window */}
      <polygon points="610,60 610,300 300,450 380,330" fill="url(#hs-beam)" opacity="0.22" />

      {/* floor */}
      <rect y="450" width="700" height="130" fill="url(#hs-floor)" />
      <g stroke="#6f6b62" strokeOpacity="0.22" strokeWidth="1">
        <line x1="350" y1="450" x2="-120" y2="580" />
        <line x1="350" y1="450" x2="60" y2="580" />
        <line x1="350" y1="450" x2="240" y2="580" />
        <line x1="350" y1="450" x2="460" y2="580" />
        <line x1="350" y1="450" x2="640" y2="580" />
        <line x1="350" y1="450" x2="820" y2="580" />
        <line x1="0" y1="492" x2="700" y2="492" />
        <line x1="0" y1="540" x2="700" y2="540" />
      </g>
      {/* window light patch on floor */}
      <polygon points="250,462 520,462 600,560 190,560" fill="#fff6d6" opacity="0.22" filter="url(#hs-blur-soft)" />
      {/* wall/floor shadow line */}
      <rect y="446" width="700" height="10" fill="#050b07" opacity="0.25" filter="url(#hs-blur3)" />
      <rect y="448" width="700" height="3" fill="#8f8a7f" />
      <rect y="438" width="700" height="10" fill="#f6f4ee" />

      {/* lounge bench */}
      <g>
        <ellipse cx="445" cy="470" rx="130" ry="9" fill="#000" opacity="0.28" filter="url(#hs-blur3)" />
        <rect x="330" y="404" width="230" height="46" rx="10" fill="#4a4f52" />
        <rect x="330" y="404" width="230" height="10" rx="5" fill="#62686b" />
        <rect x="338" y="414" width="214" height="26" rx="6" fill="#3a3e41" />
        <rect x="345" y="448" width="5" height="18" fill="#c9a24a" />
        <rect x="540" y="448" width="5" height="18" fill="#c9a24a" />
      </g>

      {/* plant */}
      <g>
        <g transform="translate(168 372) skewX(-18)" opacity="0.14" filter="url(#hs-blur6)">
          <Plant shadow />
        </g>
        <ellipse cx="108" cy="458" rx="40" ry="7" fill="#000" opacity="0.35" filter="url(#hs-blur3)" />
        <g transform="translate(108 372)">
          <Plant />
        </g>
        <path d="M74 372h68l-7 84a6 6 0 0 1-6 5H87a6 6 0 0 1-6-5z" fill="url(#hs-pot)" />
        <ellipse cx="108" cy="372" rx="34" ry="5" fill="#2a1d12" />
      </g>

      {/* vignette */}
      <rect width="700" height="580" fill="none" />
    </svg>
  )
}
