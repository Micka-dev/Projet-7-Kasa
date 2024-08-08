// Import React
import { useState } from 'react'
// Import SCSS du composant
import '../../Components/Collapse/collapse.scss'

// Composant qui permet d'afficher les collapses et son contenu en fonction de l'état d'ouverture de la collapse

function Collapse({ title, content }) {
  // Création d'un hook d'état reflétant l'état d'ouverture de la collapse et sa mise en jour en fonction du clic sur la collapse
  const [OpeningState, setOpeningState] = useState(false)

  // Permet de basculer entre une collapse ouverte et fermée
  const toggleOpeningState = () => {
    setOpeningState(!OpeningState)
  }

  return (
    <div className="container-collapses shrink-container">
      <div
        className="container-collapses_collapse "
        // Détection du clic sur la collapse et appelle "toggleOpeningState"
        onClick={toggleOpeningState}
      >
        <h2 className="container-collapses_collapse_title">{title}</h2>

        {/* Condition qui gère l'animation de rotation du chevron en fonction du clic sur la collapse */}
        {OpeningState ? (
          <i className="container-collapses_collapse_icon fa-solid fa-chevron-up anticlockwiseRotationChevron"></i>
        ) : (
          <i className="container-collapses_collapse_icon fa-solid fa-chevron-up"></i>
        )}
      </div>

      {/* Condition qui gère l'animation de translation du contenu vers le bas ou le haut en fonction de l'état d'ouverture de la collapse */}
      {OpeningState ? (
        <div className="wrapDown">
          <p className="container-collapses_content dropDown">{content}</p>
        </div>
      ) : (
        <div className="wrapUp">
          <p className="container-collapses_content">{content}</p>
        </div>
      )}
    </div>
  )
}

export default Collapse
