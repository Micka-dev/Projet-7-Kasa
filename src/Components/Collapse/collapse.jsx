import { useState, useRef } from 'react'
import '../../Components/Collapse/collapse.scss'

function Collapse({ title, content }) {
  const [OpeningState, setOpeningState] = useState(true)

  const [icon, setIcon] = useState(
    'container-collapses_collapse_icon fa-solid fa-chevron-up'
  )

  const [dropUp, setDropUp] = useState('displayInitial')

  const target = useRef(null)

  const toggleOpeningState = () => {
    setOpeningState(!OpeningState)

    setIcon(
      OpeningState
        ? 'anticlockwiseRotationIcon container-collapses_collapse_icon fa-solid fa-chevron-up'
        : 'clockwiseRotationIcon container-collapses_collapse_icon fa-solid fa-chevron-up'
    )

    setDropUp(
      OpeningState
        ? ' dropDown container-collapses_content'
        : 'dropUp  container-collapses_content'
    )

    const displayNoneDelay = setTimeout(() => {
      !OpeningState ? target.current.classList.add('displayInitial') : null
    }, 200)
    return () => {
      clearTimeout(displayNoneDelay)
    }
  }

  return (
    <div className="container-collapses shrink-container">
      <div className="container-collapses_collapse ">
        <h2 className="container-collapses_collapse_title">{title}</h2>
        <i className={icon} onClick={toggleOpeningState}></i>
      </div>
      <p ref={target} className={dropUp}>
        {content}
      </p>
    </div>
  )
}

export default Collapse
