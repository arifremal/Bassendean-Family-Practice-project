import { useState } from 'react'
import { IMG, faqs, site } from '../data/site'
import { PageHero } from '../components/PageHero'

export default function Emergency() {
  return (
    <>
      <PageHero title="Emergency" image={IMG.pageFaq} crumbs={[{ label: 'Emergency' }]} />
      <section className="section">
        <div className="wrap" style={{ maxWidth: 760 }}>
          <div className="alert red" style={{ marginBottom: 28 }}>
            <h2 style={{ color: '#9b1c1c', marginBottom: 8 }}>Life-threatening emergency?</h2>
            <p style={{ marginBottom: 16 }}>Please call 000 immediately.</p>
            <a className="btn btn-navy" href="tel:000">
              Call 000
            </a>
          </div>
          <h2>For non-urgent care</h2>
          <p>
            Bassendean Family Practice is open Monday to Thursday, 9am – 6pm. For appointments and existing-patient care, call {site.phone} or book online.
          </p>
          <a className="btn btn-orange" href={`tel:${site.phoneTel}`}>
            Call {site.phone}
          </a>
        </div>
      </section>
    </>
  )
}

export function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <>
      <PageHero title="Have Any Questions?" image={IMG.pageFaq} crumbs={[{ label: 'FAQ' }]} />
      <section className="section">
        <div className="wrap grid-2" style={{ alignItems: 'start' }}>
          <div>
            <span className="kicker">FAQ</span>
            <h2>The major goal of family medicine is to build trust</h2>
            <p>
              The major goal of family medicine is to build trust between the patient and the general practitioner, which allows achieving the best treatment outcome.
            </p>
            <p>
              The specific features of work of the general practitioner (family doctor) are more reasonable and beneficial to both GPs and patients in many respects.
            </p>
            <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--navy)', letterSpacing: '-0.04em' }}>{site.phone}</p>
          </div>
          <div className="panel">
            {faqs.map((item, i) => (
              <div className="faq-item" key={item.q}>
                <button type="button" onClick={() => setOpen(open === i ? -1 : i)}>
                  {item.q}
                  <span>{open === i ? '–' : '+'}</span>
                </button>
                {open === i && <p>{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <PageHero title="Our Contacts" image={IMG.pageAbout} crumbs={[{ label: 'Contact' }]} />
      <section className="section">
        <div className="wrap grid-2">
          <div>
            <span className="kicker">Visit the practice</span>
            <h2>{site.address}</h2>
            <div className="panel">
              <p>
                <strong>Call us</strong>
                <br />
                <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
              </p>
              <p>
                <strong>Email</strong>
                <br />
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>Open hours</strong>
                <br />
                {site.hours.map((row) => (
                  <span key={row.day} style={{ display: 'block' }}>
                    {row.day} {row.time}
                  </span>
                ))}
              </p>
            </div>
            {sent ? (
              <div className="success" style={{ marginTop: 20 }}>Thank you. We will be in touch. This is a design demo.</div>
            ) : (
              <form
                className="form"
                style={{ marginTop: 24 }}
                onSubmit={(e) => {
                  e.preventDefault()
                  setSent(true)
                }}
              >
                <h3>Request a callback</h3>
                <div className="form-row">
                  <label className="field">
                    <span>Name *</span>
                    <input required />
                  </label>
                  <label className="field">
                    <span>Phone *</span>
                    <input required type="tel" />
                  </label>
                </div>
                <label className="field">
                  <span>Message</span>
                  <textarea />
                </label>
                <button className="btn btn-blue" type="submit">
                  Send
                </button>
              </form>
            )}
          </div>
          <iframe className="map-frame" style={{ minHeight: 520 }} title="Map" src={site.mapEmbed} loading="lazy" />
        </div>
      </section>
    </>
  )
}
