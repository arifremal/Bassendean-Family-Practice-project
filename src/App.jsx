import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Services, { ServiceDetail } from './pages/Services'
import Team, { TeamMember } from './pages/Team'
import Appointments, { AlliedHealth, GpAppointment } from './pages/Appointments'
import ScriptRequests, { ScriptForm } from './pages/ScriptRequests'
import Recruitment from './pages/Recruitment'
import Emergency, { Contact, Faq } from './pages/Info'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:slug" element={<TeamMember />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/appointments/gp" element={<GpAppointment />} />
          <Route path="/appointments/allied-health" element={<AlliedHealth />} />
          <Route path="/script-requests" element={<ScriptRequests />} />
          <Route path="/script-requests/form" element={<ScriptForm />} />
          <Route path="/gp-recruitment" element={<Recruitment />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <section className="section">
                <div className="wrap">
                  <h1>Page not found</h1>
                  <p>The page you requested is not part of this redesign demo.</p>
                  <Link className="btn btn-orange" to="/">
                    Back to home
                  </Link>
                </div>
              </section>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
