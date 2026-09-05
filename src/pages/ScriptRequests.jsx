import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IMG, scriptFees, scriptRules } from '../data/site'
import { PageHero } from '../components/PageHero'

export default function ScriptRequests() {
  return (
    <>
      <PageHero title="Online Repeat Script Requests" image={IMG.pageServices} crumbs={[{ label: 'Repeat Script Request' }]} />
      <section className="section">
        <div className="wrap grid-2" style={{ alignItems: 'start' }}>
          <div>
            <span className="kicker">Current patients</span>
            <h2>Request your repeat prescriptions in writing</h2>
            <p>
              As an existing patient of Bassendean Family Practice, you may request your repeat prescriptions in writing via our online request form.
            </p>
            <p>
              Only CURRENT PATIENTS of Bassendean Family Practice may request a non-urgent script renewal for $55. All prescriptions should be collected. Prescriptions can be mailed for $10 extra. Urgent (within 4hrs from receipt during YOUR DOCTOR’S BUSINESS hours) script requests are $90.
            </p>
            <p>Before you request your prescription renewal, please read the following information:</p>
            <div className="panel" style={{ marginTop: 8 }}>
              {scriptRules.map((rule, i) => (
                <div className="rule" key={rule}>
                  <div className="num">{i + 1}</div>
                  <p style={{ margin: 0 }}>{rule}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="grid-2" style={{ gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {scriptFees.map((fee) => (
                <article className="price-card" key={fee.label}>
                  <div className="price">{fee.price}</div>
                  <h3 style={{ fontSize: '1rem' }}>{fee.label}</h3>
                  <p style={{ margin: 0, color: 'var(--muted)' }}>{fee.note}</p>
                </article>
              ))}
            </div>
            <div className="panel" style={{ marginTop: 18 }}>
              <h3>Ready to continue?</h3>
              <p>Complete all fields of our online form. Details must match the contact details we have for you in our records.</p>
              <Link to="/script-requests/form" className="btn btn-orange btn-block">
                Open script request form
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export function ScriptForm() {
  const [sent, setSent] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero title="Repeat Script Request Form" image={IMG.pageServices} crumbs={[{ label: 'Repeat Script Request', to: '/script-requests' }, { label: 'Form' }]} />
      <section className="section">
        <div className="wrap" style={{ maxWidth: 860 }}>
          {sent ? (
            <div className="success">
              Thank you. Your script request has been recorded for this demo. Live requests are processed through the current Bassendean Family Practice website, with payment taken at the time of request.
            </div>
          ) : (
            <form className="form panel" onSubmit={onSubmit}>
              <h3>Patient details</h3>
              <div className="form-row">
                <label className="field">
                  <span>Full name *</span>
                  <input required />
                </label>
                <label className="field">
                  <span>Date of birth *</span>
                  <input required type="date" />
                </label>
              </div>
              <label className="field">
                <span>Address *</span>
                <input required />
              </label>
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

              <h3>Turnaround</h3>
              <label className="field">
                <span>Request type *</span>
                <select required>
                  {scriptFees.map((fee) => (
                    <option key={fee.label}>
                      {fee.label} ({fee.price}) — {fee.note}
                    </option>
                  ))}
                </select>
              </label>

              <h3>Medication</h3>
              {['First', 'Second', 'Third', 'Fourth'].map((label) => (
                <div className="form-row" key={label}>
                  <label className="field">
                    <span>{label} medication</span>
                    <input />
                  </label>
                  <label className="field">
                    <span>Dose and frequency</span>
                    <input />
                  </label>
                </div>
              ))}

              <h3>Pharmacy details for postage</h3>
              <label className="field">
                <span>Pharmacy name and address</span>
                <textarea />
              </label>

              <div className="alert">
                Payment is taken on our website at the time of request. This demo does not process payment.
              </div>
              <button className="btn btn-orange" type="submit">
                Submit script request
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}
