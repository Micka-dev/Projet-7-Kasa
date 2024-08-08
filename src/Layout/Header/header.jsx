import { NavLink } from 'react-router-dom'
import Logo from '../../Assets/Logo/LOGO.svg'
import './header.scss'

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
      </nav>
    </div>
  )
}

export default Header
