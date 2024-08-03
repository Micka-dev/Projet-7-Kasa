import '../../Components/Banner/banner.scss'

function Banner({ source, title }) {
  return (
    <div className="banner-container">
      <img
        className="banner-container_img"
        src={source}
        alt="Image de la bannière"
      />
      {title ? <p className="banner-container_title">{title}</p> : null}
    </div>
  )
}

export default Banner
