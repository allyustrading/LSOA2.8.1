import { PageBanner, Section, Card } from '../components/Layout'
import aboutImg from '../assets/about-landscape.svg'

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Liuli Society"
        title="A nonprofit organization dedicated to education, innovation, and community wellbeing"
        text="Liuli Society is a U.S. nonprofit organization recognized as tax-exempt under Section 501(c)(3) of the Internal Revenue Code. We are committed to advancing wellness education, research-informed innovation, and community-based initiatives that support healthier everyday living."
        image={aboutImg}
        alt="About page landscape"
      />

      <Section
        eyebrow="Who we are"
        title="Why Liuli Society exists"
        text="This page explains who Liuli Society is, why it exists, and why it is intentionally structured as a nonprofit organization."
      >
        <div className="grid-2">
          <Card>
            <h3>Mission</h3>
            <p>Our mission is to make wellness learning more understandable, more accessible, and more humane through educational resources, community programs, and research-informed development.</p>
          </Card>
          <Card>
            <h3>Vision</h3>
            <p>We envision a future where wellness knowledge, thoughtful design, and trusted support systems work together to improve everyday life with clarity and care.</p>
          </Card>
          <Card>
            <h3>Nonprofit structure</h3>
            <p>Liuli Society is presented as a public-serving organization focused on education, research-informed innovation, and mission-aligned community work rather than commercial product promotion.</p>
          </Card>
          <Card>
            <h3>Institutional credibility</h3>
            <p>This website is designed to build trust with academic partners, donors, grant audiences, volunteers, and community collaborators.</p>
          </Card>
        </div>
      </Section>
    </>
  )
}
