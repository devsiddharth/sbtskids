import PageHero from '../../components/ui/PageHero/PageHero.jsx'
import Programs from '../../components/sections/Programs/Programs.jsx'
import Methodology from '../../components/sections/Methodology/Methodology.jsx'
import Facilities from '../../components/sections/Facilities/Facilities.jsx'
import DailyActivities from '../../components/sections/DailyActivities/DailyActivities.jsx'
import CTA from '../../components/ui/CTA/CTA.jsx'

export default function ProgramsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Programs & Curriculum"
        title="A joyful class for every growing star"
        subtitle="Playgroup to UKG — each stage is a gentle adventure, built around your child's age, rhythm and natural curiosity."
        emoji="🧸"
        crumbs={['Programs']}
      />
      <Programs />
      <Methodology />
      <Facilities />
      <DailyActivities />
      <CTA />
    </main>
  )
}
