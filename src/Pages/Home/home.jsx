import Housings from '../../Datas/housings.json'

import Banner from '../../Components/Banner/banner'
import Card from '../../Components/Card/card'

import bannerImageHome from '../../Assets/Banner-img/bannerImageHome.jpg'

import '../../Components/Card/card.scss'

function Home() {
  return (
    <div>
      <Banner title="Chez vous, partout et ailleurs" source={bannerImageHome} />

      <div className="housings-container main-container">
        {Housings.map((housing) => (
          <Card
            key={housing.id}
            link={`/housing/${housing.id}`}
            title={housing.title}
            cover={housing.cover}
          />
        ))}
      </div>
    </div>
  )
}
console.log(Housings.id)

export default Home
