import PageHero from '../../components/ui/PageHero/PageHero.jsx'
import Gallery from '../../components/sections/Gallery/Gallery.jsx'
import Testimonials from '../../components/sections/Testimonials/Testimonials.jsx'
import CTA from '../../components/ui/CTA/CTA.jsx'

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Gallery"
        title="Little moments, captured with love"
        subtitle="A peek inside our colourful world festivals, play days, story time and a thousand tiny smiles."
        emoji="📸"
        crumbs={['Gallery']}
      />
      <Gallery />
      <Testimonials />
      <CTA />
    </main>
  )
}
