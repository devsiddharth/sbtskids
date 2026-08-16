import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar/Navbar.jsx'
import Footer from './components/layout/Footer/Footer.jsx'

/* Code-split pages for performance */
const Home = lazy(() => import('./pages/Home/Home.jsx'))
const About = lazy(() => import('./pages/About/About.jsx'))
const Programs = lazy(() => import('./pages/Programs/Programs.jsx'))
const Admissions = lazy(() => import('./pages/Admissions/Admissions.jsx'))
const Gallery = lazy(() => import('./pages/Gallery/Gallery.jsx'))
const Safety = lazy(() => import('./pages/Safety/Safety.jsx'))
const Contact = lazy(() => import('./pages/Contact/Contact.jsx'))
const NotFound = lazy(() => import('./pages/NotFound/NotFound.jsx'))

/* Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function PageFallback() {
  return (
    <main style={{ minHeight: '70vh', display: 'grid', placeItems: 'center' }} aria-busy="true">
      <p
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          fontSize: '1.3rem',
          color: 'var(--muted)',
        }}
      >
        <span aria-hidden="true">🎈</span> Getting the balloons ready…
      </p>
    </main>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}
