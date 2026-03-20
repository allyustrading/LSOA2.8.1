import { PageBanner, Section, Card } from '../components/Layout'
import researchImg from '../assets/research-landscape.svg'

export default function ResearchPage() {
  return (
    <>
      <PageBanner
        eyebrow="Research and Innovation"
        title="Research-informed wellness innovation"
        text="This section presents Liuli Society as a nonprofit platform for wellness education, exploratory development, and future collaboration within the broader innovation environment of UNH BIC."
        image={researchImg}
        alt="Research page landscape"
      />

      <Section
        eyebrow="Research direction"
        title="Research and innovation at UNH BIC"
        text="Our work is guided by an academic-light, mission-driven approach that remains calm, credible, and accessible to non-technical audiences."
      >
        <div className="grid-2">
          <Card>
            <h3>Why this matters</h3>
            <p>Research-informed positioning helps Liuli Society communicate seriousness, curiosity, and responsibility without adopting clinical marketing language.</p>
          </Card>
          <Card>
            <h3>What it supports</h3>
            <p>This page can support future collaboration with educators, researchers, donors, and institutions interested in mission-aligned wellness innovation.</p>
          </Card>
          <Card>
            <h3>Exploration areas</h3>
            <p>Potential areas include wellness learning tools, community pilot models, design logic for supportive daily living, and responsible refinement of educational frameworks.</p>
          </Card>
          <Card>
            <h3>UNH BIC context</h3>
            <p>The innovation environment context can be communicated as part of a broader ecosystem of learning, experimentation, and long-term nonprofit growth.</p>
          </Card>
        </div>
      </Section>
    </>
  )
}
