import Housings from '../../Datas/housings.json'

import Banner from '../../Components/Banner/banner'
import Card from '../../Components/Card/card'

import bannerImageHome from '../../Assets/Banner-img/bannerImageHome.jpg'

import '../../Pages/Home/home.scss'

import '../../Components/Card/card.scss'

function Home() {
  return (
    <div>
      <Banner title="Chez vous, partout et ailleurs" source={bannerImageHome} />

      <div className="housings-container main-container">
        {Housings.map((housing) => (
          <Card key={housing.id} housing={housing} />
        ))}
      </div>
    </div>
  )
}

export default Home
