import Hero from '../../components/sections/Hero/Hero.jsx'
import About from '../../components/sections/About/About.jsx'
import WhyChooseUs from '../../components/sections/WhyChooseUs/WhyChooseUs.jsx'
import VisionMission from '../../components/sections/VisionMission/VisionMission.jsx'
import Programs from '../../components/sections/Programs/Programs.jsx'
import Facilities from '../../components/sections/Facilities/Facilities.jsx'
import Safety from '../../components/sections/Safety/Safety.jsx'
import Teachers from '../../components/sections/Teachers/Teachers.jsx'
import DailyActivities from '../../components/sections/DailyActivities/DailyActivities.jsx'
import Methodology from '../../components/sections/Methodology/Methodology.jsx'
import Gallery from '../../components/sections/Gallery/Gallery.jsx'
import Testimonials from '../../components/sections/Testimonials/Testimonials.jsx'
import Achievements from '../../components/sections/Achievements/Achievements.jsx'
import Admission from '../../components/sections/Admission/Admission.jsx'
import FAQ from '../../components/sections/FAQ/FAQ.jsx'
import Location from '../../components/sections/Location/Location.jsx'
import Contact from '../../components/sections/Contact/Contact.jsx'
import CTA from '../../components/ui/CTA/CTA.jsx'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <WhyChooseUs />
      <VisionMission />
      <Programs />
      <Facilities />
      <Safety />
      <Teachers />
      <DailyActivities />
      <Methodology />
      <Gallery />
      <Testimonials />
      <Achievements />
      <Admission />
      <CTA />
      <FAQ />
      <Location />
      <Contact />
    </main>
  )
}
