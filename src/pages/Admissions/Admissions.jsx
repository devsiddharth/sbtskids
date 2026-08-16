import PageHero from '../../components/ui/PageHero/PageHero.jsx'
import Admission from '../../components/sections/Admission/Admission.jsx'
import FAQ from '../../components/sections/FAQ/FAQ.jsx'
import CTA from '../../components/ui/CTA/CTA.jsx'

export default function AdmissionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Admissions Open"
        title="Welcome to your child's happiest chapter"
        subtitle="Joining our family is simple, warm and exciting. Here's everything you need to know — and our team is always a call away."
        emoji="🎈"
        crumbs={['Admissions']}
      />
      <Admission />
      <FAQ />
      <CTA />
    </main>
  )
}
