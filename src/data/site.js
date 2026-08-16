/* ============================================================
   SITE CONFIGURATION
   ⚡ Change your school's details here — every section reads
   from this file, so you never have to hunt through components.
   ============================================================ */

export const site = {
  /* ✏️ School identity */
  name: 'SBTS Kids',
  shortName: 'SBTS',
  tagline: 'Where Little Smiles Learn to Shine',
  established: 2012,

  /* ✏️ Contact details */
  phone: '+91 98765 43210',
  phoneLink: 'tel:+919876543210',
  email: 'hello@sbtsschool.in',
  address: 'Green Park, Near City Center Mall, Your City, India',
  timings: 'Mon – Sat · 9:00 AM – 12:30 PM',

  /* ✏️ Admission */
  admissionYear: '2026 – 27',
  admissionOpen: true,

  /* ✏️ Social links */
  socials: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    whatsapp: 'https://wa.me/919876543210',
  },

  /* ✏️ Google Maps — replace with your exact address */
  mapQuery: 'Green Park, Your City, India',
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
