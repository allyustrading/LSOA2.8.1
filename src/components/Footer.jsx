export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-shell">
        <div>
          <div className="footer-title">Liuli Society</div>
          <p className="footer-text">
            Liuli Society is a U.S. 501(c)(3) nonprofit organization dedicated to wellness
            education, research-informed innovation, and community-centered support.
          </p>
        </div>

        <div className="footer-links">
          <a href="#/about">About</a>
          <a href="#/approach">Approach</a>
          <a href="#/pathways">Pathways</a>
          <a href="#/research">Research</a>
          <a href="#/community">Community</a>
          <a href="#/support">Support</a>
          <a href="#/contact">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Liuli Society</span>
        <span>Registered U.S. 501(c)(3) nonprofit</span>
        <span>Education-centered. Research-informed. Community-focused.</span>
      </div>
    </footer>
  )
}
