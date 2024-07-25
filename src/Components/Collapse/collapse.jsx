function Collapse({ title, content }) {
  return (
    <div>
      <div className="collapse-container main-container">
        <h2 className="collapse-container_title">{title}</h2>
        <i className="collapse-container_icon fa-solid fa-chevron-up"></i>
      </div>
      <p className="collapse-container_content main-container">{content}</p>
    </div>
  )
}

export default Collapse
