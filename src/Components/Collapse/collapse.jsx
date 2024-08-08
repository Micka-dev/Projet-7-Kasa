import { useState } from 'react'
import '../../Components/Collapse/collapse.scss'

function Collapse({ title, content }) {
  const [OpeningState, setOpeningState] = useState(false)

  const toggleOpeningState = () => {
    setOpeningState(!OpeningState)
  }

  return (
    <div className="container-collapses shrink-container">
      <div
        className="container-collapses_collapse "
        onClick={toggleOpeningState}
      >
        <h2 className="container-collapses_collapse_title">{title}</h2>

        {OpeningState ? (
          <i className="container-collapses_collapse_icon fa-solid fa-chevron-up anticlockwiseRotationChevron"></i>
        ) : (
          <i className="container-collapses_collapse_icon fa-solid fa-chevron-up"></i>
        )}
      </div>
      {/* méthode 1: Animation du texte en "drop down" et "drop up" avec des transitions et sans utiliser de "setTimeout" et avec un seul "useState" ; cependant pas de suppresion du "content" dans le html car sinon annule l'animation du "drop up", je joue avec "height" ou encore passer par une librairy => non autorisé, je n'ai rien trouvé dans l'ensemble de mes recherches permettant de le faire hormis le "setTimeout" permettant de retarder l'exécution du code*/}

      {OpeningState ? (
        <div className="wrapDown">
          <p className="container-collapses_content dropDown">{content}</p>
        </div>
      ) : (
        <div className="wrapUp">
          <p className="container-collapses_content">{content}</p>
        </div>
      )}

      {/* Méthode 2 : Animation du texte en "drop down" avec une animation keyframes mais pas d'animation possible en "drop up" car suppresion du "content", seul moyen trouvé dans mes recherches serait d'utiliser un "setTimeout" pour retarder l'exécution du code mais tu m'as dit que ce nétait pas une bonne pratique ; (de plus d'après mes recherches il n'est pas possible d'animer un "display: none" en CSS) */}

      {/* {OpeningState ? (
        <p className="container-collapses_content dropAnimationDown ">
          {content}
        </p>
      ) : null} */}

      {/* Méthode 3 : Animation des chevrons uniquement le "content" apparait et disparait brusquement car suppression du content dans le html */}

      {/* {OpeningState ? (
        <p className="container-collapses_content dropDown ">{content}</p>
      ) : null} */}
    </div>
  )
}

export default Collapse
