import '../../Components/Collapse/collapse.scss'
import { useState, useRef } from 'react'

function Collapse({ data }) {
  const [OpeningState, setOpeningState] = useState(true)

  const [icon, setIcon] = useState(
    'container-collapses_collapse_icon fa-solid fa-chevron-up'
  )

  const [dropUp, setDropUp] = useState('displaiyInitial')

  const target = useRef(null)

  const toggleOpeningState = () => {
    setOpeningState(!OpeningState)
    setIcon(
      OpeningState
        ? 'anticlockwiseRotationIcon container-collapses_collapse_icon fa-solid fa-chevron-up'
        : 'clockwiseRotationIcon container-collapses_collapse_icon fa-solid fa-chevron-up'
    )

    // Supprime la balise <p> du DOM lorsque OpeningState passe à false
    setDropUp(
      OpeningState
        ? ' dropDown container-collapses_content main-container'
        : 'dropUp  container-collapses_content main-container'
    )
    const displayNoneDelay = setTimeout(() => {
      !OpeningState ? target.current.classList.add('displaiyInitial') : null
    }, 200)
    return () => {
      clearTimeout(displayNoneDelay)
    }
  }

  return (
    <div className="container-collapses main-container">
      <div className="container-collapses_collapse ">
        <h2 className="container-collapses_collapse_title">{data.title}</h2>
        <i className={icon} onClick={toggleOpeningState}></i>
      </div>
      <p
        ref={target}
        className={dropUp}
        // className={`container-collapses_content main-container ${
        //   OpeningState ? 'dropDown' : 'dropUp'
        // }`}
      >
        {data.content}
      </p>
    </div>
  )
}

export default Collapse
