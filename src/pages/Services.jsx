import { Link, useParams } from 'react-router-dom'
import { IMG, services } from '../data/site'
import { CtaBand, PageHero } from '../components/PageHero'

const details = {
  gp: {
    title: 'GP',
    image: IMG.gp,
    intro: 'Your trusted family doctor in Bassendean. We are committed to providing patient-centered, high-quality care to patients of all ages.',
    body: [
      'We have introduced the principle of family medicine, which means that the family practitioner will handle the majority of medical requests, with a specialists involved only if necessary.',
      'Dr Julian Charles provides general practice care for existing patients. Unfortunately we are not taking any new patients at this time. If you would like to be added to the waitlist, you can request this on our GP appointment form.',
    ],
    points: [
      'Consultations, results discussion and regular screening',
      'Script requests, sick notes and flu injections',
      'Detailed medical history and physical examination',
      'ECG, echocardiography, ultrasound and laboratory studies',
    ],
  },
  podiatry: {
    title: 'Podiatry',
    image: IMG.podiatry,
    intro: 'Walking is a gift, but we often don’t realise the importance of our feet and legs until we feel pain and discomfort. We believe we offer the most patient-centred podiatry Perth has to offer.',
    body: [
      'Australia’s Foot & Leg Specialists is taking strides in providing podiatry in Perth. Whether you’re suffering from foot, heel or knee pain, our podiatrists in Bassendean, Mt Lawley and Warwick can help. As a trusted team of health professionals, our aim is to alleviate your pain and improve your quality of life.',
    ],
    points: [
      'Foot Specialist — Perth’s premier foot and leg rehabilitation provider',
      'Bunion Surgery — relief from painful bunions is just a click away',
      'Custom Orthotics — custom foot insoles supporting proper foot function',
      'Sports Podiatrist — stop your legs holding you back from superior performance',
    ],
    specialist: 'footandlegspecialists.com.au',
  },
  counselling: {
    title: 'Counselling',
    image: IMG.counselling,
    intro: 'Are you feeling overwhelmed? Our counselors are here to help you through the tough times.',
    body: [
      'Golda Newland is a dedicated and highly qualified counsellor with a Masters Degree in Counselling. Her primary focus areas include Anger Management, Anxiety and Panic, Life Coaching, Depression, Parenting, Relationships, and Youth Counselling.',
      'Golda also specialises in grief and loss, offers group counselling, and provides home visits to keep care accessible.',
    ],
    points: [
      'Anxiety, panic and depression support',
      'Relationships, parenting and youth counselling',
      'Grief and loss',
      'Group counselling and home visits',
    ],
  },
  'exercise-physiotherapy': {
    title: 'Exercise Physiotherapy',
    image: IMG.exercise,
    intro: 'Preventing and managing health risks through exercise.',
    body: [
      'Our exercise physiologists can assist you to exercise safely and effectively to improve your overall health and function.',
      'Whether you are recovering, managing a chronic condition, or building a safer routine, we help you move with confidence.',
    ],
    points: [
      'Safe, supervised exercise programs',
      'Support for health risks and chronic conditions',
      'Improved function, strength and confidence',
      'Care coordinated with your GP and allied health team',
    ],
  },
}

export default function Services() {
  return (
    <>
      <PageHero title="Services" image={IMG.pageServices} crumbs={[{ label: 'Services' }]} />
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
              <Link to={service.path} className="service-card" key={service.slug}>
                <div className="service-icon">
                  <img src={service.icon} alt="" />
                </div>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <span className="link-more">View service →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}

export function ServiceDetail() {
  const { slug } = useParams()
  const data = details[slug]
  const service = services.find((s) => s.slug === slug)

  if (!data) {
    return (
      <section className="section">
        <div className="wrap">
          <h1>Service not found</h1>
          <Link to="/services">Back to services</Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <PageHero
        title={data.title}
        image={data.image}
        crumbs={[{ label: 'Services', to: '/services' }, { label: data.title }]}
      />
      <section className="section">
        <div className="wrap grid-2">
          <div>
            <span className="kicker">{service?.title}</span>
            <h2>{data.intro}</h2>
            {data.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {data.specialist && (
              <p>
                <strong>Our Specialist:</strong>{' '}
                <a href={`https://${data.specialist}`} target="_blank" rel="noreferrer">
                  {data.specialist}
                </a>
              </p>
            )}
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
              <Link to="/appointments" className="btn btn-orange">
                Book an Appointment
              </Link>
              <a href="tel:0892799422" className="btn btn-outline">
                Call 08 9279 9422
              </a>
            </div>
          </div>
          <div>
            <img src={data.image} alt={data.title} style={{ width: '100%', height: 420, objectFit: 'cover', borderRadius: 24 }} />
            <ul className="checklist">
              {data.points.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
