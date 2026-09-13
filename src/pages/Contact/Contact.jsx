import PageHero from '../../components/ui/PageHero/PageHero.jsx'
import Contact from '../../components/sections/Contact/Contact.jsx'
import Location from '../../components/sections/Location/Location.jsx'

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact Us"
        title="Say hello, we're friendly, promise!"
        subtitle="Questions, tours, or just to chat about your little one our door (and our inbox) is always open."
        emoji="💌"
        crumbs={['Contact']}
      />
      <Contact />
      <Location />
    </main>
  )
}
