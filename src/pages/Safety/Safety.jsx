import PageHero from '../../components/ui/PageHero/PageHero.jsx'
import Safety from '../../components/sections/Safety/Safety.jsx'
import Facilities from '../../components/sections/Facilities/Facilities.jsx'
import CTA from '../../components/ui/CTA/CTA.jsx'

export default function SafetyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Safety & Security"
        title="Protected by love and by design"
        subtitle="CCTV, secure entry, verified staff and a nurse on campus. Because nothing matters more than your peace of mind."
        emoji="🛡️"
        crumbs={['Safety']}
      />
      <Safety />
      <Facilities />
      <CTA />
    </main>
  )
}
