import React, { useState } from 'react'
import './gallery.scss'
import ArrowRight from '../../Assets/Arrow/ArrowRight.svg'
import ArrowLeft from '../../Assets/Arrow/ArrowLeft.svg'

function Gallery({ pictures }) {
  const [currentPicture, setCurrentPicture] = useState(0)

  const slideShow = (index) => {
    if (currentPicture === index) {
      return true
    }
  }

  const nextSlide = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length)
  }

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
          {pictures.map((picture, index) =>
            slideShow(index) ? (
              <img
                key={picture}
                src={picture}
                alt="housing picture"
                className="housing-carousel_slide"
              />
            ) : null
          )}
        </div>
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
