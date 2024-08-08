// Import React
import { NavLink } from 'react-router-dom'
// Import du logo
import Logo from '../../Assets/Logo/LOGO.svg'
// Import du SCSS du composant
import './header.scss'

// Composant qui permet l'affichage du Header et de ses liens de navigation

function Header() {
  return (
    <div className="header-container main-container">
      <img className="header-container_logo" src={Logo} alt="Logo du site" />

      <nav className="header-container_nav">
        <NavLink
          // Permet la navigation vers la route définie
          // Condition qui permet d'activer ou non le style d'un lien sélectionné
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
