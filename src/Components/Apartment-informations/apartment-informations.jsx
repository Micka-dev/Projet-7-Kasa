import React from 'react'
import '../../Components/Apartment-informations/apartment-informations.scss'

function ApartmentInformations({ housingSelected }) {
  const name = housingSelected.host.name
  const [firstName, lastName] = name.split(' ')

  return (
    <div className="apartment-informations">
      <div className="apartment-info">
        <h1 className="apartment-info_title">{housingSelected.title}</h1>
        <h2 className="apartment-info_subtitle">{housingSelected.location}</h2>
        <div className="apartment-info_tags-container">
          {housingSelected.tags.map((tag) => (
            <span className="apartment-info_tags-container_tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="apartment_owner">
        <div className="apartment_owner-infos">
          <h3 className="apartment_owner-infos_name">
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
          <img
            className="apartment_owner-infos_badge"
            src={housingSelected.host.picture}
          ></img>
        </div>
        <div className="apartment_owner-infos_rating">
          {[1, 2, 3, 4, 5].map((starsNumber) => (
            <i
              className={`fa-solid fa-star ${
                housingSelected.rating >= starsNumber ? 'redStar' : null
              } `}
              key={starsNumber}
            ></i>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ApartmentInformations
