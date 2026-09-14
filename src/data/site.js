/* ============================================================
   SITE CONFIGURATION
   ⚡ Change your school's details here — every section reads
   from this file, so you never have to hunt through components.
   ============================================================ */

export const site = {
  /* ✏️ School identity */
  name: 'SBTS Kids',
  fullName: "Sri Balatripura Sundari Kids' school",
  shortName: 'SBTS',
  tagline: 'Where Little Smiles Learn to Shine',
  motto: 'Nature · Study · Activity',
  established: 2022,

  /* ✏️ Production website (used for the CTA & QR code) */
  website: 'https://www.sbtskids.in/',
  websiteLabel: 'www.sbtskids.in',

  /* ✏️ Contact details */
  phone: '+91 86394 59962',
  phoneLink: 'tel:+918639459962',
  email: 'lathashivaranjani9@gmail.com',
  address: 'SRI BALA TRIPURA SUNDARI KIDS PLAY SCHOOL, 6-5-172/1, Power House Colony, IB COLONY, Ramagundam, Telangana 505209',
  timings: 'Mon – Fri· 9:30 AM – 4:00 PM & Sat · 9:30 AM – 12:30 PM',

  /* ✏️ Admission */
  admissionYear: '2026 – 27',
  admissionOpen: true,

  /* ✏️ Social links */
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    whatsapp: 'https://wa.me/918639459962',
  },

  /* ✏️ Google Maps — replace with your exact address */
  mapQuery: 'SRI BALA TRIPURA SUNDARI KIDS PLAY SCHOOL',
}

/* ---------- Navigation ---------- */
export const navLinks = [
  { label: 'Home', to: '/', emoji: '🏠' },
  { label: 'About', to: '/about', emoji: '🌻' },
  { label: 'Programs', to: '/programs', emoji: '🧸' },
  { label: 'Admissions', to: '/admissions', emoji: '🎈' },
  { label: 'Gallery', to: '/gallery', emoji: '📸' },
  { label: 'Safety', to: '/safety', emoji: '🛡️' },
  { label: 'Contact', to: '/contact', emoji: '💌' },
]
