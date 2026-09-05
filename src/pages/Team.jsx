import { Link, useParams } from 'react-router-dom'
import { IMG, team } from '../data/site'
import { CtaBand, PageHero } from '../components/PageHero'

const bios = {
  'dr-julian-charles': {
    name: 'Dr Julian Charles',
    role: 'General Practitioner',
    image: IMG.julian,
    body: [
      'Dr Julian Charles is a General Practitioner at Bassendean Family Practice, providing patient-centered, high-quality care through the principle of family medicine.',
      'The family practitioner handles the majority of medical requests, with specialists involved only if necessary.',
      'Existing patients can request a GP visit online. Unfortunately we are not taking any new patients at this time. If you would like to be added to Dr Julian Charles’ waitlist for when he re-opens his books, you can do so on the GP appointment form.',
    ],
  },
  'golda-newland': {
    name: 'Golda Newland',
    role: 'Counsellor',
    image: IMG.golda,
    body: [
      'Golda Newland is a dedicated and highly qualified counsellor with a primary focus on a diverse range of mental health and well-being areas. Holding a Masters Degree in Counselling, Golda brings a wealth of knowledge and expertise to her practice.',
      'Her primary focus areas include Anger Management, Anxiety and Panic, Life Coaching, Depression, Parenting, Relationships, and Youth Counselling. Golda is committed to helping individuals navigate the complexities of their emotions and relationships, offering support and guidance in various aspects of their lives.',
      'In addition to her primary focus areas, Golda possesses additional specialties in grief and loss. She recognizes the profound impact that loss can have on individuals and is dedicated to providing compassionate assistance to those experiencing such challenges.',
      'Golda’s services extend beyond individual counseling sessions. She also offers Group Counselling to create a supportive community for individuals facing similar issues. Understanding the unique needs of her clients, Golda goes the extra mile by providing Home Visits, ensuring accessibility for those who may find it challenging to attend traditional office appointments.',
      'With a passion for empowering individuals and promoting mental well-being, Golda Newland stands out as a trusted and compassionate counselor who strives to make a positive difference in the lives of her clients.',
    ],
  },
}

export default function Team() {
  return (
    <>
      <PageHero title="Meet Our Doctors" image={IMG.pageTeam} crumbs={[{ label: 'Our Team' }]} />
      <section className="section">
        <div className="wrap">
          <div className="section-head center">
            <span className="kicker">Our team</span>
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
    </>
  )
}

export function TeamMember() {
  const { slug } = useParams()
  const person = bios[slug]

  if (!person) {
    return (
      <section className="section">
        <div className="wrap">
          <h1>Profile not found</h1>
          <Link to="/team">Back to team</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <PageHero title={person.name} image={IMG.pageTeam} crumbs={[{ label: 'Our Team', to: '/team' }, { label: person.name }]} />
      <section className="section">
        <div className="wrap grid-2">
          <img src={person.image} alt={person.name} style={{ width: '100%', height: 520, objectFit: 'cover', objectPosition: 'top', borderRadius: 28 }} />
          <div>
            <span className="kicker">Speciality</span>
            <h2>{person.role}</h2>
            <h3 style={{ marginTop: 8 }}>Biography</h3>
            {person.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
              <Link to="/appointments" className="btn btn-orange">
                Book an Appointment
              </Link>
              <a href="tel:0892799422" className="btn btn-outline">
                Call 08 9279 9422
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
