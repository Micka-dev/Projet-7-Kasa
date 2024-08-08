// Import du logo
import Logo from '../../Assets/Logo/LOGO-white.png'
// Import du SCSS du composant
import './footer.scss'

// Composant qui permet d'afficher le footer
function Footer() {
  return (
    <div className="footer-container">
      <img className="footer-container_logo" src={Logo} alt="Logo du site" />
      <p className="footer-container_text">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
