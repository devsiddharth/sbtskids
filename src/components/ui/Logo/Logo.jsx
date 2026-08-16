/**
 * Logo — cheerful sun-over-open-book mark used in the Navbar & Footer.
 */
export default function Logo({ size = 46 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="SBTS Kids logo">
      {/* Sun */}
      <circle cx="32" cy="24" r="13" fill="#FFD93D" />
      {Array.from({ length: 10 }).map((_, i) => (
        <line
          key={i}
          x1="32"
          y1="4"
          x2="32"
          y2="10"
          stroke="#FFA94D"
          strokeWidth="4.4"
          strokeLinecap="round"
          transform={`rotate(${i * 36} 32 24)`}
        />
      ))}
      {/* Sun face */}
      <circle cx="27.5" cy="22" r="1.8" fill="#3d2f00" />
      <circle cx="36.5" cy="22" r="1.8" fill="#3d2f00" />
      <path d="M27 27.5 Q32 31.5 37 27.5" stroke="#3d2f00" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      {/* Open book */}
      <path
        d="M8 40 Q20 32 32 40 Q44 32 56 40 L56 52 Q44 44 32 52 Q20 44 8 52 Z"
        fill="#7692FF"
      />
      <path d="M32 40 L32 52" stroke="#4a62c9" strokeWidth="2.4" strokeLinecap="round" />
      {/* Pages */}
      <path d="M14 43 Q20 39 26 42" stroke="#ffffff" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.85" />
      <path d="M38 42 Q44 39 50 43" stroke="#ffffff" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.85" />
      {/* Star sparkle */}
      <path
        d="M50 18 l1.6 3.4 3.4 1.6 -3.4 1.6 -1.6 3.4 -1.6 -3.4 -3.4 -1.6 3.4 -1.6 Z"
        fill="#FF5A5F"
      />
    </svg>
  )
}
