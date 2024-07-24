import { Link, NavLink } from 'react-router-dom'
import Logo from '../../Assets/Logo/LOGO.svg'

function Header() {
  return (
    <div className="header-container main-container">
      <img className="header-container_logo" src={Logo} alt="Logo du site" />

      <nav className="header-container_nav">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'header-container_link-activated' : null
          }
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'header-container_link-activated' : null
          }
          to="/about"
        >
          A Propos
        </NavLink>
        {/* <Link to="/housing/bookingId">Fiche logement</Link> */}
      </nav>
    </div>
  )
}

export default Header
