// Import de la base de données
import Housings from '../../Datas/housings.json'
// Import des composants nécessaires à l'affichage de la page
import Banner from '../../Components/Banner/banner'
import Card from '../../Components/Card/card'
// Import de la source de l'image de la bannière
import bannerImageHome from '../../Assets/Banner-img/bannerImageHome.jpg'
// Import du SCSS de la page
import '../../Pages/Home/home.scss'

// Composant qui permet l'affichage dynamique de la page d'accueil en fonction des données passées

function Home() {
  return (
    <div className="home-container main-container">
      <Banner title="Chez vous, partout et ailleurs" source={bannerImageHome} />

      <div className="housings-container">
        {/* Mappage des données et "key" passées (indispensable pour les listes en react) */}
        {Housings.map((housing) => (
          <Card key={housing.id} housing={housing} />
        ))}
      </div>
    </div>
  )
}

export default Home
