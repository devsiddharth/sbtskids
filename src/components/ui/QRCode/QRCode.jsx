import { QRCodeSVG } from 'qrcode.react'

/**
 * QRCode — branded wrapper around qrcode.react that encodes the school's
 * production website URL. White background + dark modules + generous quiet
 * space keep it reliably scannable, both on screen and in shared screenshots.
 */
export default function QRCode({
  value = 'https://www.sbtskids.in/',
  size = 148,
  title = 'Scan to visit our website',
  className = '',
}) {
  return (
    <figure
      className={className}
      style={{
        background: '#ffffff',
        padding: '12px',
        borderRadius: 'var(--r-md, 20px)',
        boxShadow: 'var(--shadow-sm, 0 4px 14px rgba(45, 55, 72, 0.08))',
        margin: 0,
        width: 'fit-content',
        lineHeight: 0,
      }}
    >
      <QRCodeSVG
        value={value}
        size={size}
        level="M"
        marginSize={2}
        bgColor="#ffffff"
        fgColor="#2d3748"
        role="img"
        aria-label={title}
        title={title}
      />
    </figure>
  )
}
