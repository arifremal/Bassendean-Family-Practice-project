import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { IMG, site } from '../data/site'
import { Icon } from './Icons'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Our Team' },
  { to: '/script-requests', label: 'Repeat Scripts' },
  { to: '/gp-recruitment', label: 'GP Recruitment 2025' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="site-header">
      <div className="topbar">
        <div className="wrap">
          <div className="topbar-left">
            <span>{site.name}</span>
            <span className="hide-md">AGPAL Accredited Practice</span>
          </div>
          <div className="topbar-right">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <Link className="pill-emg" to="/emergency">
              Emergency 000
            </Link>
          </div>
        </div>
      </div>

      <div className="wrap header-main">
        <Link to="/" className="logo" aria-label={site.name}>
          <img src={IMG.logo} alt={site.name} />
        </Link>

        <div className="header-meta">
          <div className="meta-item">
            <span className="meta-icon">
              <Icon name="pin" />
            </span>
            <div>
              <small>Visit us</small>
              <strong>
                39 Old Perth Road
                <br />
                Bassendean, WA 6054
              </strong>
            </div>
          </div>
          <div className="meta-item">
            <span className="meta-icon">
              <Icon name="phone" />
            </span>
            <div>
              <small>Call us</small>
              <strong>
                <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
              </strong>
            </div>
          </div>
          <div className="meta-item">
            <span className="meta-icon">
              <Icon name="clock" />
            </span>
            <div>
              <small>Open hours</small>
              <strong>
                Mon – Thu
                <br />
                9am – 6pm
              </strong>
            </div>
          </div>
        </div>

        <Link to="/appointments" className="btn btn-orange header-cta">
          Book an Appointment
        </Link>

        <button className="hamburger" type="button" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className={`nav ${open ? 'open' : ''}`}>
        <div className="wrap">
          <ul className="nav-links">
            {links.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {open && (
        <div className="mobile-panel open">
          <div className="wrap">
            <ul className="nav-links">
              {links.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === '/'}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink to="/appointments">Book an Appointment</NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}
