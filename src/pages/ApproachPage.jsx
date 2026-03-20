import { PageBanner, Section, Card } from '../components/Layout'
import pathwaysImg from '../assets/pathways-landscape.svg'

export default function ApproachPage() {
  const steps = [
    ['Knowledge first', 'Our approach begins with understanding. Education comes before recommendation, and clarity comes before action.'],
    ['From learning to design', 'We explore how insights can be translated into more useful frameworks, materials, and supportive daily practices.'],
    ['From design to support', 'Support becomes meaningful when it is sustained through learning, community context, and thoughtful follow-through.'],
    ['Long-term trust', 'The organization values calm communication, responsible positioning, and trust built over time rather than short-term attention.'],
  ]

  return (
    <>
      <PageBanner
        eyebrow="Our Approach"
        title="Our approach begins with understanding"
        text="Our approach begins not with selling, but with understanding. We present Liuli’s methodology in a nonprofit-friendly and professionally grounded format."
        image={pathwaysImg}
        alt="Approach page landscape"
      />

      <Section
        eyebrow="How the model works"
        title="How knowledge, design, and support connect"
        text="Liuli Society connects wellness knowledge, thoughtful design, and companion-centered support into a clear framework for education and community impact."
      >
        <div className="grid-4">
          {steps.map(([title, text]) => (
            <Card key={title}>
              <h3>{title}</h3>
              <p>{text}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
