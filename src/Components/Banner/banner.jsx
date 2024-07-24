import '../../Assets/Banner-img/banner-img-home.url'

function Banner({ source, title }) {
  return (
    <div className="banner-container main-container">
      <img
        className="banner-container_img"
        src="https://s3-alpha-sig.figma.com/img/4706/e7dd/e270fc8fc902a1eb738458e7b29c1899?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Bs5tc~gdQIgzaaSRKzHWxeldph01yvX7LjFzwrCGZgp8t6NU-reYeviwrUAVxdCRHkr7nJ~AL0g199meU0Zbx6R3k8OkLsUCzx-Eh-xbXUrDnhkVUqMXL70rsrk~byy5tuPqUGp-xelaO5X6-DfHkPVX5N-QLYJCwPKBHbVPi2SEdmmASkYqdC-TBTVj0-N1LUfVnY6sL~KOOXHePnNV1VuqB1qnwiHw7CeydgmW40Rt6QxOwY97KHleiIRzyLxejls2ifWw3a-FZRq7d4AvysN93f5p3ZgDQ5y7sH3igSQsZnZm9wojMgAnzdIG6EJdoXcAbmijFZvi90sHi3zgRw__"
        alt="Image de la bannière"
      />
      <p className="banner-container_title">Chez vous, partout et ailleurs</p>
    </div>
  )
}

export default Banner
