import { Link } from 'react-router-dom'

import '../../Pages/Error404/error404.scss'

function Error() {
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
