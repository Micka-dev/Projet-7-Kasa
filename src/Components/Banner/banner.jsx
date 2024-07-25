function Banner({ source, title }) {
  return (
    <div className="banner-container main-container">
      <img
        className="banner-container_img"
        src={source}
        alt="Image de la bannière"
      />
      <p className="banner-container_title">{title}</p>
    </div>
  )
}

export default Banner
