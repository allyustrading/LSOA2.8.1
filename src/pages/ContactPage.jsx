import { PageBanner, Section, Card } from '../components/Layout'
import contactImg from '../assets/contact-landscape.svg'

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Let’s build a better wellness future together"
        text="We welcome conversations with educators, researchers, community partners, volunteers, and mission-aligned supporters who believe in a more thoughtful approach to natural wellness."
        image={contactImg}
        alt="Contact page landscape"
      />

      <Section
        eyebrow="Get in touch"
        title="Contact Liuli Society"
        text="Use this page to begin conversations about research collaboration, community partnership, education, volunteer interest, or general mission-aligned support."
      >
        <div className="grid-2">
          <Card>
            <h3>Inquiry areas</h3>
            <p>University collaboration, research conversations, community partnerships, educational programming, volunteer participation, and mission-aligned support.</p>
          </Card>
          <Card>
            <h3>Contact form preview</h3>
            <div className="form-grid">
              <input className="field" placeholder="Your name" />
              <input className="field" placeholder="Email address" />
              <input className="field" placeholder="Subject" />
              <textarea className="field" rows="6" placeholder="How would you like to connect with Liuli Society?" />
              <button className="button button-dark" style={{ width: 'fit-content' }}>Send inquiry</button>
            </div>
          </Card>
        </div>
      </Section>
    </>
  )
}
