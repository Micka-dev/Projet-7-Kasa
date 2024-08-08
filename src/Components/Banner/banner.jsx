// Import du SCSS du composant
import '../../Components/Banner/banner.scss'

// Composant qui permet de construire la bannière à partir des props récupérées

function Banner({ source, title }) {
  return (
    <div className="banner-container">
      <img
        className="banner-container_img"
        src={source}
        alt="Image de la bannière"
      />
      {/* Condition permettant de pallier à l'absence de titre */}
      {title ? <p className="banner-container_title">{title}</p> : null}
    </div>
  )
}

export default Banner
