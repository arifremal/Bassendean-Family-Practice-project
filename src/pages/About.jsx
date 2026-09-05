import { Link } from 'react-router-dom'
import { IMG, site, team } from '../data/site'
import { CtaBand, PageHero } from '../components/PageHero'

export default function About() {
  return (
    <>
      <PageHero title="About Us" image={IMG.pageAbout} crumbs={[{ label: 'About Us' }]} />

      <section className="section">
        <div className="wrap grid-2">
          <div>
            <span className="kicker">We care about your health</span>
            <h2>Excellence is our speciality</h2>
            <p>
              Bassendean Family Practice is your local medical centre, committed to providing patient-centered, high-quality care to patients of all ages.
            </p>
            <p>
              We have introduced the principle of family medicine, which means that the family practitioner will handle the majority of medical requests, with a specialists involved only if necessary.
            </p>
            <p>
              We’ve formed a highly qualified team who know what they’re doing, but more importantly enjoy what they do.
            </p>
            <div className="stat-row">
              <div className="stat">
                <strong>GP</strong>
                <span>Family medicine</span>
              </div>
              <div className="stat">
                <strong>Allied</strong>
                <span>Health on site</span>
              </div>
              <div className="stat">
                <strong>AGPAL</strong>
                <span>Accredited</span>
              </div>
            </div>
          </div>
          <div className="feature-photo">
            <img src={IMG.clinic} alt="Clinic" />
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="wrap">
          <div className="section-head center">
            <span className="kicker">Why patients choose us</span>
            <h2>A healing touch, close to home</h2>
          </div>
          <div className="grid-4">
            {[
              { title: 'Modern equipment', text: 'We are not just a regular clinic, but a medical service provider, with which you can share any health concern.' },
              { title: 'Optimal price', text: 'In order to obtain operational and accurate results, our clinic works with trusted partners and specialists as needed.' },
              { title: 'Professional doctors', text: 'A highly qualified team of GPs and allied health practitioners who enjoy what they do.' },
              { title: 'Qualified staff', text: 'From reception to consulting rooms, we keep the experience calm, clear and patient-centred.' },
            ].map((item) => (
              <article className="service-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head center">
            <span className="kicker">Doctors</span>
            <h2>Team of Professionals</h2>
          </div>
          <div className="grid-2" style={{ maxWidth: 820, margin: '0 auto', gap: 28 }}>
            {team.map((member) => (
              <Link to={member.path} className="team-card" key={member.slug}>
                <img src={member.image} alt={member.name} />
                <div className="info">
                  <h3>{member.name}</h3>
                  <div className="role">{member.role}</div>
                </div>
              </Link>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 28 }}>
            Visit us at {site.address}
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
