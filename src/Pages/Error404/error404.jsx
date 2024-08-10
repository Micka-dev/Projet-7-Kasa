// Import React Router
import { Link } from 'react-router-dom'
// Import du SCSS de la page
import '../../Pages/Error404/error404.scss'

// Composant qui permet l'affichage de la page erreur 404

function Error() {
  document.title = '404 - Kasa'

  return (
    <div className="error404-container main-container">
      <h1 className="error404-container_404">404</h1>
      <h2 className="error404-container_title">
        Oups! La page que vous demandez n'existe pas.
      </h2>
      <Link to="/" className="error404-container_link">
        Retourner sur la page d’accueil
      </Link>
    </div>
  )
}

export default Error
