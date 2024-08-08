// Import React Router
import { Link } from 'react-router-dom'
// Import du SCSS du composant
import '../../Components/Card/card.scss'

// Composant qui permet l'affichage d'une carte à partir des props reçues

function Card({ housing }) {
  return (
    <div className="housings-container_card">
      {/* Passage de l'ID du logement comme paramètre dans le path */}
      <Link to={`/housing/${housing.id}`}>
        <img
          className="housings-container_img"
          src={housing.cover}
          alt="Photo du logement sélectionné"
        />
        <h2 className="housings-container_title">{housing.title}</h2>
        <div className="housings-container_filter"></div>
      </Link>
    </div>
  )
}

export default Card
