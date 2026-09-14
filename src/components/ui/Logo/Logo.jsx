/**
 * Logo — the official Sri Balatripura Sundari Kids' School crest.
 * Rendered as an <img> so it scales crisply and keeps its transparency.
 */
export default function Logo({ size = 46, className = '' }) {
  return (
    <img
      src="/images/Logo_new-Photoroom.png"
      alt="Sri Balatripura Sundari Kids' School crest"
      width={size}
      height={size}
      className={className}
      style={{ width: size, height: 'auto', objectFit: 'contain', display: 'block' }}
      decoding="async"
    />
  )
}
