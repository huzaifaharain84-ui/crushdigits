import { CTA_PHOTO } from '../data/heroImage.js'

// Friendly consultant portrait for the "Get in Touch" banner.
export default function CtaPerson() {
  if (CTA_PHOTO) {
    return <img src={CTA_PHOTO} alt="Crush Digits consultant" className="cta-photo" />
  }

  return (
    <svg
      className="cta-person"
      viewBox="0 0 320 340"
      role="img"
      aria-label="Smiling Crush Digits consultant"
    >
      <defs>
        <linearGradient id="cp-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#d6f2b6" />
          <stop offset="1" stopColor="#85D43C" />
        </linearGradient>
        <linearGradient id="cp-blazer" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1d5a3a" />
          <stop offset="1" stopColor="#0f3b25" />
        </linearGradient>
        <linearGradient id="cp-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2c8a8" />
          <stop offset="1" stopColor="#e4ae88" />
        </linearGradient>
        <linearGradient id="cp-hair" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b261b" />
          <stop offset="1" stopColor="#1e120d" />
        </linearGradient>
        <clipPath id="cp-clip">
          <circle cx="160" cy="170" r="150" />
        </clipPath>
      </defs>

      <circle cx="160" cy="170" r="158" fill="#ffffff" opacity="0.25" />
      <circle cx="160" cy="170" r="150" fill="url(#cp-bg)" />

      <g clipPath="url(#cp-clip)">
        {/* hair (back) */}
        <path d="M78 170C70 80 118 52 160 52s90 28 82 118l10 150H68z" fill="url(#cp-hair)" />
        {/* body / blazer */}
        <path d="M34 340c0-56 46-84 126-84s126 28 126 84z" fill="url(#cp-blazer)" />
        {/* blouse */}
        <path d="M128 262l32 62 32-62z" fill="#ffffff" />
        <path d="M126 258l24 76-44-44z" fill="#256b45" />
        <path d="M194 258l-24 76 44-44z" fill="#256b45" />
        {/* neck */}
        <path d="M144 214h32v52c-10 14-22 14-32 0z" fill="#dca07a" />
        <path d="M144 236q16 14 32 0v-12h-32z" fill="#c98b66" opacity="0.5" />
        {/* ears + earrings */}
        <ellipse cx="108" cy="180" rx="7" ry="12" fill="#e4ae88" />
        <ellipse cx="212" cy="180" rx="7" ry="12" fill="#e4ae88" />
        <circle cx="108" cy="196" r="4" fill="#D9A21B" />
        <circle cx="212" cy="196" r="4" fill="#D9A21B" />
        {/* face */}
        <ellipse cx="160" cy="164" rx="52" ry="62" fill="url(#cp-skin)" />
        {/* hair (fringe, side-swept) */}
        <path d="M106 160C102 100 140 78 182 86c30 6 42 40 36 80-8-34-34-52-70-46-22 4-34 22-42 40z" fill="url(#cp-hair)" />
        {/* brows */}
        <path d="M130 150q10-7 22-1" stroke="#2a1a12" strokeWidth="3" strokeLinecap="round" fill="none" />
        <path d="M170 149q12-6 22 1" stroke="#2a1a12" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* eyes */}
        <ellipse cx="141" cy="166" rx="8" ry="5.2" fill="#ffffff" />
        <ellipse cx="181" cy="166" rx="8" ry="5.2" fill="#ffffff" />
        <circle cx="141" cy="166" r="3.8" fill="#3a2414" />
        <circle cx="181" cy="166" r="3.8" fill="#3a2414" />
        <circle cx="142.4" cy="164.8" r="1.2" fill="#fff" />
        <circle cx="182.4" cy="164.8" r="1.2" fill="#fff" />
        <path d="M132 161q9-6 18 0M172 161q9-6 18 0" stroke="#2a1a12" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* nose */}
        <path d="M160 170q-5 14 -1 18q4 3 8 0" stroke="#c98b66" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* cheeks */}
        <circle cx="128" cy="190" r="10" fill="#ee9a8a" opacity="0.28" />
        <circle cx="194" cy="190" r="10" fill="#ee9a8a" opacity="0.28" />
        {/* smile */}
        <path d="M142 202q18 20 38 0q-19 8-38 0z" fill="#b8434f" />
        <path d="M146 203q14 9 30 0q-15 4-30 0z" fill="#ffffff" />
      </g>
    </svg>
  )
}
