import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { alliedList, IMG, services, site, slides, team } from '../data/site'
import { CtaBand } from '../components/PageHero'
import { Icon } from '../components/Icons'

export default function Home() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6500)
    return () => clearInterval(id)
  }, [])

  const slide = slides[index]

  return (
    <>
      <section className="hero">
        {slides.map((item, i) => (
          <div className={`hero-slide ${i === index ? 'active' : ''}`} key={item.title}>
            <img src={item.image} alt="" />
          </div>
        ))}
        <div className="wrap hero-copy">
          <span className="kicker">{slide.kicker}</span>
          <h1>{slide.title}</h1>
          <p>{slide.text}</p>
          <div className="hero-actions">
            <Link to={slide.to} className="btn btn-blue btn-lg">
              {slide.cta} <Icon name="arrow" />
            </Link>
            <Link to="/appointments" className="btn btn-orange btn-lg">
              Book an Appointment
            </Link>
          </div>
        </div>
        <button className="hero-nav-btn prev" type="button" aria-label="Previous" onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)}>
          ‹
        </button>
        <button className="hero-nav-btn next" type="button" aria-label="Next" onClick={() => setIndex((i) => (i + 1) % slides.length)}>
          ›
        </button>
        <div className="hero-dots">
          {slides.map((item, i) => (
            <button key={item.title} className={i === index ? 'active' : ''} type="button" aria-label={item.title} onClick={() => setIndex(i)} />
          ))}
        </div>
      </section>

      <div className="hours-strip">
        <div className="wrap">
          <div className="hours-card">
            <div className="hours-intro">
              <h3>Open Hours</h3>
              <p>Your local medical centre in Bassendean</p>
            </div>
            <div className="hours-grid">
              {site.hours.map((row) => (
                <div className="hours-row" key={row.day}>
                  <span>{row.day}</span>
                  <strong>{row.time}</strong>
                </div>
              ))}
            </div>
            <div className="hours-cta">
              <a href={`tel:${site.phoneTel}`} className="btn btn-navy">
                Call {site.phoneAlt}
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="section-head center">
            <span className="kicker">Our specialties</span>
            <h2>High-Quality Services</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              We have introduced the principle of family medicine, which means that the family practitioner will handle the majority of medical requests, with a specialists involved only if necessary.
            </p>
          </div>
          <div className="grid-4">
            {services.map((service) => (
              <article className="service-card" key={service.slug}>
                <div className="service-icon">
                  <img src={service.icon} alt="" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <Link className="link-more" to={service.path}>
                  Learn more →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="wrap grid-2">
          <div className="feature-photo">
            <img src={IMG.clinic} alt="Bassendean Family Practice clinic" />
            <div className="badge-float">
              <img src={IMG.agpal} alt="AGPAL Accredited" />
              <strong style={{ color: 'var(--navy)', fontSize: '0.9rem' }}>Accredited family practice</strong>
            </div>
          </div>
          <div>
            <span className="kicker blue">Professional medical care</span>
            <h2>Get better now!</h2>
            <p>
              For us, there are no minor aspects, because a quality result always depends on trifles. Over the years of our activities, we have gained the unique experience of organizing medical services for citizens and foreign nationals.
            </p>
            <p>
              Private patients, international organizations and corporate businesses feel safe and comfortable in establishing relationships.
            </p>
            <p>Our team of highly skilled and experienced healthcare professionals can cater to any number of cases, offering a range of services.</p>
            <ul className="checklist">
              {alliedList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div style={{ marginTop: 28 }}>
              <Link to="/about" className="btn btn-blue">
                About the practice
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head center">
            <span className="kicker">Doctors</span>
            <h2>Team of Professionals</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              We’ve formed a highly qualified team who know what they’re doing, but more importantly enjoy what they do.
            </p>
          </div>
          <div className="grid-2" style={{ maxWidth: 820, margin: '0 auto', gap: 28 }}>
            {team.map((member) => (
              <Link to={member.path} className="team-card" key={member.slug}>
                <img src={member.image} alt={member.name} />
                <div className="info">
                  <h3>{member.name}</h3>
                  <div className="role">{member.role}</div>
                  <span className="link-more">View profile →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />

      <section className="section soft">
        <div className="wrap grid-2">
          <div>
            <span className="kicker">Find us</span>
            <h2>Your trusted family doctor in Bassendean</h2>
            <p>We are committed to providing patient-centered, high-quality care to patients of all ages.</p>
            <div className="panel" style={{ marginTop: 20 }}>
              <p>
                <strong>Address</strong>
                <br />
                {site.address}
              </p>
              <p>
                <strong>Phone</strong>
                <br />
                <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>Hours</strong>
                <br />
                {site.hoursShort}
              </p>
            </div>
          </div>
          <iframe className="map-frame" title="Practice location" src={site.mapEmbed} loading="lazy" />
        </div>
      </section>
    </>
  )
}
