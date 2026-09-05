import { Link } from 'react-router-dom'

export function PageHero({ title, image, crumbs }) {
  return (
    <section className="page-hero">
      <img src={image} alt="" />
      <div className="wrap">
        <div className="crumbs">
          <Link to="/">Home</Link>
          {crumbs?.map((c) => (
            <span key={c.label}>
              {' / '}
              {c.to ? <Link to={c.to}>{c.label}</Link> : c.label}
            </span>
          ))}
        </div>
        <h1>{title}</h1>
      </div>
    </section>
  )
}

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="wrap">
        <p className="kicker">Why wait?</p>
        <h2>Book An Appointment Now!</h2>
        <p>Or call us on 9279 9422</p>
        <div className="cta-actions">
          <Link to="/appointments" className="btn btn-orange btn-lg">
            Book An Appointment
          </Link>
          <a href="tel:0892799422" className="btn btn-ghost btn-lg">
            Call 08 9279 9422
          </a>
        </div>
      </div>
    </section>
  )
}
