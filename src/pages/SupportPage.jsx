import { PageBanner, Section, Card } from '../components/Layout'
import supportImg from '../assets/support-landscape.svg'

export default function SupportPage() {
  return (
    <>
      <PageBanner
        eyebrow="Support the Mission"
        title="Support the mission and future growth of Liuli Society"
        text="As a 501(c)(3) nonprofit organization, Liuli Society welcomes mission-aligned partnerships, educational collaborations, and future support opportunities that help expand community wellness impact."
        image={supportImg}
        alt="Support page landscape"
      />

      <Section
        eyebrow="Why support matters"
        title="Why support matters"
        text="Support can include partnership, educational collaboration, volunteer contribution, and future tax-deductible giving."
      >
        <div className="grid-2">
          <Card>
            <h3>Mission-aligned partnership</h3>
            <p>Liuli Society welcomes relationships with institutions, community organizations, and supporters who value thoughtful, public-serving wellness education.</p>
          </Card>
          <Card>
            <h3>Future giving readiness</h3>
            <p>Liuli Society is a registered 501(c)(3) nonprofit organization in the United States. Contributions may be tax-deductible to the extent permitted by law.</p>
          </Card>
        </div>
      </Section>
    </>
  )
}
