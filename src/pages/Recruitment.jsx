import { useState } from 'react'
import { IMG } from '../data/site'
import { PageHero } from '../components/PageHero'

export default function Recruitment() {
  const [step, setStep] = useState(1)
  const [sent, setSent] = useState(false)
  const [gp, setGp] = useState('yes')

  function next(e) {
    e.preventDefault()
    if (step < 5) setStep(step + 1)
    else setSent(true)
  }

  return (
    <>
      <PageHero title="GP Vacancies 2025" image={IMG.pageAbout} crumbs={[{ label: 'GP Recruitment 2025' }]} />
      <section className="section">
        <div className="wrap grid-2" style={{ alignItems: 'start' }}>
          <div>
            <span className="kicker">Join the team</span>
            <h2>Discover the Benefits of Working at Our Family Friendly Clinic Today!</h2>
            <p>
              Bassendean Family Practice is looking for General Practitioners to join a highly qualified team who know what they’re doing, and more importantly enjoy what they do.
            </p>
            <div className="alert red">
              Our practice is within an MM1 area meaning international applicants cannot work here without first completing their 10 year moritorium at a rural practice (MM2+ area). We’d love to have you — but AHPRA makes the rules here. Keep at it though — good things take time!
            </div>
          </div>
          <div className="panel">
            {sent ? (
              <div className="success">Thank you for your interest. This is a design demo — please use the live form on bassprac.com.au or email reception@bassprac.com.au.</div>
            ) : (
              <form className="form" onSubmit={next}>
                <p style={{ margin: 0, fontWeight: 700, color: 'var(--navy)' }}>Step {step} of 5</p>
                {step === 1 && (
                  <>
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
                  </>
                )}
                {step === 2 && (
                  <label className="field">
                    <span>Email *</span>
                    <input required type="email" />
                  </label>
                )}
                {step === 3 && (
                  <label className="field">
                    <span>Phone *</span>
                    <input required type="tel" />
                  </label>
                )}
                {step === 4 && (
                  <>
                    <label className="field">
                      <span>Are you a General Practitioner? *</span>
                      <div className="choice">
                        <label>
                          <input type="radio" name="gp" checked={gp === 'yes'} onChange={() => setGp('yes')} /> Yes
                        </label>
                        <label>
                          <input type="radio" name="gp" checked={gp === 'no'} onChange={() => setGp('no')} /> No
                        </label>
                      </div>
                    </label>
                    {gp === 'no' && (
                      <p>We are currently only looking for General Practitioners. But if you let us know your Profession we’ll keep your details for future job opportunities — thank you.</p>
                    )}
                    <label className="field">
                      <span>Which country did you obtain your Medical Degree? *</span>
                      <select required>
                        <option>Australia</option>
                        <option>Other Country</option>
                      </select>
                    </label>
                    <label className="field">
                      <span>Do you hold a current AHPRA Registration? *</span>
                      <select required>
                        <option>Yes</option>
                        <option>No</option>
                        <option>Not Sure</option>
                      </select>
                    </label>
                  </>
                )}
                {step === 5 && (
                  <>
                    <label className="field">
                      <span>When would you like to begin? *</span>
                      <select required>
                        <option>Immediately</option>
                        <option>Other</option>
                      </select>
                    </label>
                    <label className="field">
                      <span>Let me know what you need and I’ll do my best to make it happen.</span>
                      <textarea />
                    </label>
                  </>
                )}
                <div style={{ display: 'flex', gap: 10 }}>
                  {step > 1 && (
                    <button type="button" className="btn btn-outline" onClick={() => setStep(step - 1)}>
                      Back
                    </button>
                  )}
                  <button className="btn btn-orange" type="submit">
                    {step === 5 ? 'Submit application' : 'Next'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
