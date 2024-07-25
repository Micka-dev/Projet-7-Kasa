import Housings from '../../Datas/housings.json'

import Banner from '../../Components/Banner/banner'
import Card from '../../Components/Card/card'
import '../../Components/Card/card.scss'

function Home() {
  // const [data, setData] = useState([])

  return (
    <div>
      <Banner />

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
