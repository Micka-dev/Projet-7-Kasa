import { Link } from 'react-router-dom'

import '../../Components/Card/card.scss'

function Card({ housing }) {
  return (
    <div className="housings-container_card">
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
