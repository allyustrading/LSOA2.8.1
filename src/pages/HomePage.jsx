import { FullWidthHero, Section, Card } from '../components/Layout'
import heroImg from '../assets/hero-landscape.svg'
import pathwaysImg from '../assets/pathways-landscape.svg'
import researchImg from '../assets/research-landscape.svg'

export default function HomePage() {
  return (
    <>
      <FullWidthHero
        eyebrow="Liuli Society"
        title="Advancing wellness education, thoughtful innovation, and community support"
        text="Liuli Society is a U.S. 501(c)(3) nonprofit organization dedicated to advancing wellness education, research-informed innovation, and community-centered support. We work to make natural wellness knowledge more understandable, more accessible, and more supportive for individuals, families, and communities."
        image={heroImg}
        alt="Liuli Society wide hero landscape"
      >
        <div className="hero-actions">
          <a href="#/about" className="button button-gold">Explore the mission</a>
          <a href="#/contact" className="button button-paper">Start a conversation</a>
        </div>

        <div className="hero-metrics">
          <div className="metric">
            <strong>Education-led</strong>
            <span>Wellness knowledge translated into accessible public learning.</span>
          </div>
          <div className="metric">
            <strong>Research-informed</strong>
            <span>Innovation framed through reflection, exploration, and responsibility.</span>
          </div>
          <div className="metric">
            <strong>Community-centered</strong>
            <span>Programs and partnerships designed around trust and practical value.</span>
          </div>
          <div className="metric">
            <strong>Institution-ready</strong>
            <span>Built to speak clearly to universities, donors, and mission partners.</span>
          </div>
        </div>
      </FullWidthHero>

      <Section
        eyebrow="A stronger first impression"
        title="A nonprofit platform for education, research, and community value"
        text="Liuli Society exists to present a clear nonprofit mission centered on wellness education, responsible exploration, and community-centered support. The website is designed to communicate trust, professionalism, and long-term public value."
      >
        <div className="grid-3">
          <Card>
            <h3>Wellness education</h3>
            <p>We translate wellness knowledge into clear, accessible learning that supports healthier and more informed daily living.</p>
          </Card>
          <Card>
            <h3>Research-informed innovation</h3>
            <p>We explore thoughtful approaches to natural wellness through learning, reflection, and responsible development.</p>
          </Card>
          <Card>
            <h3>Community-centered support</h3>
            <p>We aim to create a more supportive experience through education, dialogue, partnership, and human-centered follow-through.</p>
          </Card>
        </div>

        <div className="feature-strip">
          <div className="feature-image">
            <img src={pathwaysImg} alt="Landscape pathways section" />
          </div>
          <div className="feature-panel">
            <div className="eyebrow">Pathways preview</div>
            <h2 className="section-title">A wellness framework organized around pathways</h2>
            <p className="section-text">
              Liuli Society presents wellness support through pathways that reflect everyday
              life, educational themes, and future areas of responsible development. This
              makes the site easier to understand for donors, partners, and community audiences.
            </p>
            <a href="#/pathways" className="button button-dark">View pathways</a>
          </div>
        </div>

        <div className="feature-strip">
          <div className="feature-panel">
            <div className="eyebrow">Research and innovation</div>
            <h2 className="section-title">Research and innovation with a public-serving mission</h2>
            <p className="section-text">
              The new content emphasizes seriousness, calm confidence, and nonprofit legitimacy,
              while still feeling welcoming and mission-driven.
            </p>
            <a href="#/research" className="button button-dark">Learn about research</a>
          </div>
          <div className="feature-image">
            <img src={researchImg} alt="Landscape research section" />
          </div>
        </div>
      </Section>
    </>
  )
}
