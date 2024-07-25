import { Link } from 'react-router-dom'

function Card({ title, cover, link }) {
  return (
    <div className="housings-container_card">
      <Link to={link}>
        <img
          className="housings-container_img"
          src={cover}
          alt="Photo du logement sélectionné"
        />
        <h2 className="housings-container_title">{title}</h2>
        <div className="housings-container_filter"></div>
      </Link>
    </div>
  )
}

export default Card
