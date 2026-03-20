import { PageBanner, Section, Card } from '../components/Layout'
import pathwaysImg from '../assets/pathways-landscape.svg'

const pathways = [
  ['Comfort & Circulation Support', 'Supporting everyday physical comfort, ease of movement, and a greater sense of balance through gentle wellness approaches.'],
  ['Daily Natural Skin Wellness', 'Encouraging daily practices that support balanced, healthy, and well-cared-for skin through natural care principles.'],
  ['Light Balance & Clean Living', 'Promoting habits and environments that help people feel clearer, lighter, and more grounded in daily life.'],
  ['Calm & Rest Support', 'Creating supportive routines for stillness, relaxation, and more restorative daily rhythms.'],
  ['Better Living Rituals', 'Encouraging intentional daily rituals that support rhythm, wellbeing, and quality of life.'],
  ['Focus & Clarity Support', 'Supporting clearer attention, thoughtful engagement, and mental freshness through better daily patterns.'],
]

export default function PathwaysPage() {
  return (
    <>
      <PageBanner
        eyebrow="Wellness Pathways"
        title="Wellness pathways for everyday life and future learning"
        text="The Liuli framework is organized into pathways that reflect everyday life scenarios, natural care experiences, and future directions for education, exploration, and innovation."
        image={pathwaysImg}
        alt="Pathways landscape banner"
      />

      <Section
        eyebrow="Framework"
        title="A structured wellness framework"
        text="Each pathway represents a theme of support, learning, and future exploration within a nonprofit and education-centered framework."
      >
        <div className="grid-3">
          {pathways.map(([title, text]) => (
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
