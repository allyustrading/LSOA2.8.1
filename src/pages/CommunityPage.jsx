import { PageBanner, Section, Card } from '../components/Layout'
import communityImg from '../assets/community-landscape.svg'

export default function CommunityPage() {
  return (
    <>
      <PageBanner
        eyebrow="Community"
        title="Community support rooted in learning and participation"
        text="Liuli Society exists not only to explore wellness ideas, but to make them more accessible and more supportive for real communities through education, dialogue, and human-centered engagement."
        image={communityImg}
        alt="Community page landscape"
      />

      <Section
        eyebrow="Public-facing work"
        title="Community education and public benefit"
        text="This section highlights community education, small-group experiences, volunteer opportunities, and a long-term vision of supportive public-facing work."
      >
        <div className="grid-3">
          <Card>
            <h3>Educational workshops</h3>
            <p>Programs and learning experiences that help make wellness themes easier to understand and discuss in everyday contexts.</p>
          </Card>
          <Card>
            <h3>Small-group experiences</h3>
            <p>Thoughtful formats for reflection, dialogue, and supportive shared learning within trusted community settings.</p>
          </Card>
          <Card>
            <h3>Volunteer participation</h3>
            <p>Opportunities for mission-aligned contributors to support community programming, outreach, and future nonprofit growth.</p>
          </Card>
        </div>
      </Section>
    </>
  )
}
