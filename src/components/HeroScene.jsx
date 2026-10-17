import { HERO_PHOTO } from '../data/heroImage.js'

// Illustrated office reception wall with the Crush Digits logo.
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
        <linearGradient id="hs-wall" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#16402a" />
          <stop offset="1" stopColor="#0a1d13" />
        </linearGradient>
        <linearGradient id="hs-floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d8d5cd" />
          <stop offset="1" stopColor="#aeaaa0" />
        </linearGradient>
        <linearGradient id="hs-glass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dff1e6" />
          <stop offset="1" stopColor="#9ec9b0" />
        </linearGradient>
        <radialGradient id="hs-light" cx="0.45" cy="0.35" r="0.6">
          <stop offset="0" stopColor="#85D43C" stopOpacity="0.22" />
          <stop offset="1" stopColor="#85D43C" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="hs-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d8d5cd" stopOpacity="0" />
          <stop offset="1" stopColor="#d8d5cd" stopOpacity="1" />
        </linearGradient>
        <filter id="hs-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="6" floodColor="#85D43C" floodOpacity="0.55" />
        </filter>
      </defs>

      {/* wall */}
      <rect width="700" height="440" fill="url(#hs-wall)" />
      <rect width="700" height="440" fill="url(#hs-light)" />
      {[110, 230, 350, 470, 590].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="440" stroke="#ffffff" strokeOpacity="0.04" />
      ))}

      {/* window */}
      <g>
        <rect x="625" y="40" width="130" height="400" fill="url(#hs-glass)" />
        <g fill="#6f9d85" opacity="0.55">
          <rect x="638" y="290" width="26" height="150" />
          <rect x="671" y="250" width="34" height="190" />
          <rect x="713" y="310" width="24" height="130" />
        </g>
        <rect x="625" y="40" width="130" height="400" fill="none" stroke="#0a1d13" strokeWidth="6" />
        <line x1="690" y1="40" x2="690" y2="440" stroke="#0a1d13" strokeWidth="5" />
        <line x1="625" y1="190" x2="755" y2="190" stroke="#0a1d13" strokeWidth="5" />
      </g>

      {/* logo on the wall */}
      <g filter="url(#hs-glow)">
        <image href="/cd-mark.png" x="195" y="150" width="124" height="63" />
        <image href="/logo-wordmark.png" x="335" y="140" width="265" height="65" />
      </g>

      {/* floor */}
      <rect y="440" width="700" height="140" fill="url(#hs-floor)" />
      <rect y="440" width="700" height="3" fill="#ffffff" opacity="0.35" />
      <g opacity="0.22" transform="translate(0 880) scale(1 -1)">
        <image href="/cd-mark.png" x="195" y="470" width="124" height="63" />
        <image href="/logo-wordmark.png" x="335" y="470" width="265" height="65" />
      </g>
      <rect y="440" width="700" height="140" fill="url(#hs-fade)" opacity="0.8" />

      {/* plant */}
      <g transform="translate(70 0)">
        <ellipse cx="120" cy="438" rx="46" ry="8" fill="#000" opacity="0.18" />
        <path d="M84 350h72l-8 86h-56z" fill="#e8e6e0" />
        <path d="M84 350h72l-2 14H86z" fill="#cfcdc5" />
        <g fill="#2F9D2A">
          <ellipse cx="120" cy="290" rx="14" ry="62" />
          <ellipse cx="92" cy="310" rx="13" ry="52" transform="rotate(-28 92 310)" />
          <ellipse cx="148" cy="310" rx="13" ry="52" transform="rotate(28 148 310)" />
          <ellipse cx="72" cy="335" rx="11" ry="40" transform="rotate(-55 72 335)" />
          <ellipse cx="168" cy="335" rx="11" ry="40" transform="rotate(55 168 335)" />
        </g>
        <g fill="#146934" opacity="0.55">
          <ellipse cx="106" cy="300" rx="7" ry="44" transform="rotate(-14 106 300)" />
          <ellipse cx="136" cy="302" rx="7" ry="44" transform="rotate(14 136 302)" />
        </g>
      </g>
    </svg>
  )
}
