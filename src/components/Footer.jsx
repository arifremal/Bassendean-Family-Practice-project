import { Link } from 'react-router-dom'
import { IMG, site } from '../data/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Link to="/" className="footer-logo">
            <img src={IMG.logo} alt={site.name} />
          </Link>
          <p>
            We’ve formed a highly qualified team who know what they’re doing, but more importantly enjoy what they do.
          </p>
          <img src={IMG.agpal} alt="AGPAL Accredited" style={{ height: 42, width: 'auto', marginTop: 12 }} />
        </div>

        <div>
          <h4>Our Contacts</h4>
          <ul>
            <li>{site.address}</li>
            <li>
              Call us{' '}
              <a href={`tel:${site.phoneTel}`}>
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>{site.hoursShort}</li>
          </ul>
        </div>

        <div>
          <h4>Open Hours</h4>
          <ul>
            {site.hours.map((row) => (
              <li key={row.day}>
                {row.day} {row.time}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Quick links</h4>
          <ul>
            <li>
              <Link to="/appointments">Online Appointments</Link>
            </li>
            <li>
              <Link to="/script-requests">Repeat Script Request</Link>
            </li>
            <li>
              <Link to="/gp-recruitment">GP Recruitment 2025</Link>
            </li>
            <li>
              <Link to="/emergency">Emergency</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/team">Our Team</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap copyright">
        <span>Copyright © 2021 bassprac.com.au All Rights Reserved.</span>
        <span>Terms of use | Privacy Policy</span>
      </div>
    </footer>
  )
}
