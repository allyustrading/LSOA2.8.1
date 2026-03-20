export function FullWidthHero({ eyebrow, title, text, image, alt, children }) {
  return (
    <section className="full-hero">
      <div className="full-hero-media">
        <img src={image} alt={alt} />
        <div className="full-hero-overlay" />
      </div>
      <div className="full-hero-content">
        <div className="content-shell">
          <div className="eyebrow light">{eyebrow}</div>
          <h1 className="display-title">{title}</h1>
          <p className="display-text">{text}</p>
          {children}
        </div>
      </div>
    </section>
  )
}

export function PageBanner({ eyebrow, title, text, image, alt }) {
  return (
    <section className="page-banner">
      <div className="page-banner-media">
        <img src={image} alt={alt} />
        <div className="page-banner-overlay" />
      </div>
      <div className="page-banner-content">
        <div className="content-shell">
          <div className="eyebrow light">{eyebrow}</div>
          <h1 className="page-title">{title}</h1>
          <p className="page-text">{text}</p>
        </div>
      </div>
    </section>
  )
}

export function Section({ eyebrow, title, text, children, dark = false }) {
  return (
    <section className={dark ? 'section section-dark' : 'section'}>
      <div className="section-shell">
        <div className="section-head">
          <div className={dark ? 'eyebrow light' : 'eyebrow'}>{eyebrow}</div>
          <h2 className={dark ? 'section-title light' : 'section-title'}>{title}</h2>
          {text ? <p className={dark ? 'section-text light' : 'section-text'}>{text}</p> : null}
        </div>
        {children}
      </div>
    </section>
  )
}

export function Card({ children, dark = false }) {
  return <div className={dark ? 'card card-dark' : 'card'}>{children}</div>
}
