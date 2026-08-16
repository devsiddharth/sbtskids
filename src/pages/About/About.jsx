import PageHero from '../../components/ui/PageHero/PageHero.jsx'
import About from '../../components/sections/About/About.jsx'
import VisionMission from '../../components/sections/VisionMission/VisionMission.jsx'
import WhyChooseUs from '../../components/sections/WhyChooseUs/WhyChooseUs.jsx'
import Teachers from '../../components/sections/Teachers/Teachers.jsx'
import CTA from '../../components/ui/CTA/CTA.jsx'

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Story"
        title="The little school with a very big heart"
        subtitle="From the very first hello, we've believed that childhood should feel like a wonderland — safe, joyful and full of magic."
        emoji="🌻"
        crumbs={['About']}
      />
      <About />
      <VisionMission />
      <WhyChooseUs />
      <Teachers />
      <CTA />
    </main>
  )
}
