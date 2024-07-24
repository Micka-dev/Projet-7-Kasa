import { useParams } from 'react-router-dom'

import Housings from '../../Datas/housings.json'

function Card() {
  const { bookingId } = useParams()
  return (
    <div className="housings-container main-container">
      {Housings.map((housing) => (
        <div className="housings-container_card" key={housing.id}>
          <img
            bookingId={housing.id}
            className="housings-container_img"
            src={housing.pictures[0]}
            alt="Photo du logement"
          />
          <h2 className="housings-container_title">{housing.title}</h2>
          <div className="housings-container_filter"></div>
        </div>
      ))}
    </div>
  )
}

export default Card
