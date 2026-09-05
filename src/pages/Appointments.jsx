import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IMG } from '../data/site'
import { PageHero } from '../components/PageHero'

const cards = [
  {
    title: 'General Practitioner',
    text: 'Request a visit with Dr Julian Charles. Existing patients only — books are currently closed to new patients, with a waitlist available.',
    to: '/appointments/gp',
    image: IMG.gp,
  },
  {
    title: 'Request Repeat Script',
    text: 'Current patients may request a non-urgent script renewal online. Collection and postage options are available.',
    to: '/script-requests',
    image: IMG.iconAid,
    icon: true,
  },
  {
    title: 'Allied Health Practitioner',
    text: 'Book podiatry, counselling or exercise physiology. Please provide details so we can allocate the right time.',
    to: '/appointments/allied-health',
    image: IMG.exercise,
  },
]

export default function Appointments() {
  return (
    <>
      <PageHero title="Online Appointments" image={IMG.pageServices} crumbs={[{ label: 'Online Appointments' }]} />
      <section className="section">
        <div className="wrap">
          <div className="section-head center">
            <span className="kicker">Book now</span>
            <h2>Who Would You Like To See?</h2>
            <p className="lead" style={{ margin: '0 auto' }}>
              We’ve formed a highly qualified team who know what they’re doing, but more importantly enjoy what they do.
            </p>
          </div>
          <div className="grid-3">
            {cards.map((card) => (
              <Link to={card.to} className="team-card" key={card.title}>
                {card.icon ? (
                  <div style={{ height: 220, display: 'grid', placeItems: 'center', background: 'var(--blue-soft)' }}>
                    <img src={card.image} alt="" style={{ width: 88, height: 88, objectFit: 'contain' }} />
                  </div>
                ) : (
                  <img src={card.image} alt="" style={{ height: 220, objectFit: 'cover' }} />
                )}
                <div className="info">
                  <h3>{card.title}</h3>
                  <p style={{ color: 'var(--muted)' }}>{card.text}</p>
                  <span className="link-more">Continue →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export function GpAppointment() {
  const [sent, setSent] = useState(false)
  const [existing, setExisting] = useState('yes')

  function onSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero title="GP Visit Request Form" image={IMG.gp} crumbs={[{ label: 'Online Appointments', to: '/appointments' }, { label: 'General Practitioner' }]} />
      <section className="section">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <div className="alert" style={{ marginBottom: 28 }}>
            Are you an existing patient AND have seen Dr Charles in the past 2 years? If not, unfortunately we’re not taking any new patients at this time. You may join the waitlist below.
          </div>
          {sent ? (
            <div className="success">Thank you. Your GP visit request has been received. This is a design demo — please call 08 9279 9422 to confirm a live booking.</div>
          ) : (
            <form className="form panel" onSubmit={onSubmit}>
              <label className="field">
                <span>Are you an existing patient AND have seen Dr Charles in the past 2 years? *</span>
                <div className="choice">
                  <label>
                    <input type="radio" name="existing" value="yes" checked={existing === 'yes'} onChange={() => setExisting('yes')} />
                    Yes
                  </label>
                  <label>
                    <input type="radio" name="existing" value="no" checked={existing === 'no'} onChange={() => setExisting('no')} />
                    No — add me to the waitlist
                  </label>
                </div>
              </label>
              {existing === 'no' && (
                <div className="alert red">
                  Unfortunately we’re not taking any new patients at this time. If you’d like to be added to the doctor’s waitlist select “Please add me to Dr Julian Charles’ (GP) waitlist for when he re-opens his books.”
                </div>
              )}
              <div className="form-row">
                <label className="field">
                  <span>First name *</span>
                  <input required name="first" />
                </label>
                <label className="field">
                  <span>Last name *</span>
                  <input required name="last" />
                </label>
              </div>
              <div className="form-row">
                <label className="field">
                  <span>Date of birth *</span>
                  <input required type="date" name="dob" />
                </label>
                <label className="field">
                  <span>Phone *</span>
                  <input required type="tel" name="phone" />
                </label>
              </div>
              <label className="field">
                <span>How soon do you want your appointment? *</span>
                <select required defaultValue="Next Available">
                  <option>EMERGENCY? — Please Call 000.</option>
                  <option>Next Available</option>
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="field">
                <span>Preferred Doctor *</span>
                <select required>
                  <option>Dr Julian Charles (GP)</option>
                  <option>Please add me to Dr Julian Charles’ (GP) waitlist for when he re-opens his books.</option>
                </select>
              </label>
              <label className="field">
                <span>Would you say your problem is Simple or Complex? *</span>
                <select required>
                  <option>Simple — Script Request, Results Discussion, Sick Note, Flu Injection, Regular Screening</option>
                  <option>Complex — Excision, Multiple Problems for Discussion, Bodily Injury/Malaise</option>
                </select>
              </label>
              <label className="field">
                <span>Reason for appointment *</span>
                <textarea required placeholder="Please provide details so we can better prepare and allocate the doctors time for your appointment to ensure minimum wait time." />
              </label>
              <button className="btn btn-orange" type="submit">
                Request an Appointment
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}

export function AlliedHealth() {
  const [sent, setSent] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero title="Allied Health" image={IMG.exercise} crumbs={[{ label: 'Online Appointments', to: '/appointments' }, { label: 'Allied Health' }]} />
      <section className="section">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <p className="lead">Please provide details so we can better prepare and allocate the doctors time for your appointment to ensure minimum wait time.</p>
          {sent ? (
            <div className="success">Thank you. Your allied health request has been received. This is a design demo — please call 08 9279 9422 to confirm a live booking.</div>
          ) : (
            <form className="form panel" onSubmit={onSubmit}>
              <div className="form-row">
                <label className="field">
                  <span>First name *</span>
                  <input required />
                </label>
                <label className="field">
                  <span>Last name *</span>
                  <input required />
                </label>
              </div>
              <div className="form-row">
                <label className="field">
                  <span>Phone *</span>
                  <input required type="tel" />
                </label>
                <label className="field">
                  <span>Email *</span>
                  <input required type="email" />
                </label>
              </div>
              <label className="field">
                <span>Who would you like to see? *</span>
                <select required>
                  <option>Podiatry</option>
                  <option>Counselling — Golda Newland</option>
                  <option>Exercise Physiotherapy</option>
                </select>
              </label>
              <label className="field">
                <span>Reason for appointment *</span>
                <textarea required />
              </label>
              <button className="btn btn-blue" type="submit">
                Request an Appointment
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
