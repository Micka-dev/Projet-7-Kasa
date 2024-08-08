// Import React
import React, { useState } from 'react'
// Import SCSS du composant
import './gallery.scss'
// Import des images
import ArrowRight from '../../Assets/Arrow/ArrowRight.svg'
import ArrowLeft from '../../Assets/Arrow/ArrowLeft.svg'

// Fonction qui permet l'affichage du carousel et sa navigation fonctionnelle

function Gallery({ pictures }) {
  // Création d'un hook d'état permettant d'identifier l'index de la slide courante et sa mise à jour en fonction de la navigation dans le caroussel
  const [currentPicture, setCurrentPicture] = useState(0)

  // Permet de passer à la slide suivante tout en bouclant à l'infini
  const nextSlide = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length)
  }

  // Permet de passer à la slide précédente tout en bouclant à l'infini
  const previousSlide = () => {
    const newCurrentPicture = currentPicture - 1
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1)
      return
    }
    setCurrentPicture(currentPicture - 1)
  }

  return (
    <>
      <div className="housing-carousel main-container">
        <div className="housing-carousel_image-container">
          {/* Condition permettant l'affichage de la slide correspondante */}
          {pictures.map((picture, index) =>
            currentPicture === index ? (
              <img
                key={picture}
                src={picture}
                alt=""
                className={'housing-carousel_slide'}
              />
            ) : null
          )}
        </div>
        {/* Conditions permettant ou non l'affichage des flèches de navigation et du compteur de slides */}
        {pictures.length === 1 ? null : (
          <span className="slideCounter">
            {currentPicture + 1}/{pictures.length}
          </span>
        )}
        {pictures.length > 1 && (
          <img
            className="btn arrowLeft"
            src={ArrowLeft}
            alt="icon flèche gauche"
            onClick={previousSlide}
          />
        )}
        {pictures.length > 1 && (
          <img
            className="btn arrowRight"
            src={ArrowRight}
            alt="icon flèche droite"
            onClick={nextSlide}
          />
        )}
      </div>
    </>
  )
}

export default Gallery
