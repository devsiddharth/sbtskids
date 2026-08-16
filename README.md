# 🎈 SBTS Kids — Kindergarten School Website

A joyful, premium, award-worthy kindergarten website built with **React 19 + Vite**,
vanilla **CSS Modules**, **Framer Motion**, **React Router**, **React Icons** and **Swiper**.

## ✨ Quick Start

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run preview   # preview the build
```

## 🗂️ Project Structure

```
src/
  assets/          # (your images can live here or in /public/images)
  components/
    layout/        # Navbar, Footer
    ui/            # Button, SectionHeading, SmartImage, Decor, Lightbox, CTA…
    sections/      # 17 reusable homepage sections (Hero → Contact)
  pages/           # Home, About, Programs, Admissions, Gallery, Safety, Contact, 404
  hooks/           # useInView, useCountUp
  utils/           # shared Framer Motion variants
  data/            # ALL content lives here — edit without touching components
  styles/          # global.css (design tokens, keyframes, base)
```

## 🛠️ Personalise It

1. **School name / phone / address** → `src/data/site.js`
2. **All copy** (programs, teachers, FAQs, testimonials…) → `src/data/*.js`
3. **Photos** → drop files into `public/images/<category>/`, then set the path in the
   matching data file (see `public/images/README.md`).
4. **Colours & fonts** → `src/styles/global.css` (CSS variables at the top).

## 🎨 Design System

- Rounded cards, blob backgrounds, curved wave separators, floating decorations
- Playful yellow/red/teal/blue palette on a warm cream background
- `Baloo 2` headings + `Nunito` body (Google Fonts)
- Subtle micro-interactions everywhere, honouring `prefers-reduced-motion`

## 📝 Notes

- The contact form currently shows a success state on submit (no backend).
  Wire it to your preferred service (e.g. Formspree, EmailJS) when ready.
- The "Watch Video" button in the hero shows a placeholder — set a video link
  in `src/data/site.js` to replace it.
