// Import des composants nécessaires à l'affichage de la page
import Banner from '../../Components/Banner/banner'
import Collapse from '../../Components/Collapse/collapse'
// Import du SCSS de la page
import '../../Pages/About/about.scss'
// Import des données nécessaires
import bannerImageAbout from '../../Assets/Banner-img/bannerImageAbout.jpg'
import dataAbout from '../../Datas/dataAbout.json'

// Composant qui permet l'affichage de la page A propos

function About() {
  document.title = 'A Propos - Kasa'

  return (
    <div className="about-container main-container">
      <Banner source={bannerImageAbout} />
      {/* Je mappe sur les données pour transmettre les données nécéssaires au composant collapse */}
      {dataAbout.map((data) => (
        <Collapse key={data.id} title={data.title} content={data.content} />
      ))}
    </div>
  )
}

export default About
