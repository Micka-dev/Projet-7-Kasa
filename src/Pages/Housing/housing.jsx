// Import React Router
import { useParams } from 'react-router-dom'
// Import base de données
import Housings from '../../Datas/housings.json'
// Import des composants nécessaires à l'affichage de la page
import Error404 from '../Error404/error404'
import Gallery from '../../Components/Gallery/gallery'
import ApartmentInformations from '../../Components/Apartment-informations/apartment-informations'
import Collapse from '../../Components/Collapse/collapse'
// Import du SCSS de la page
import '../../Pages/Housing/housing.scss'

// Composant qui permet l'affichage de la fiche du logement sélectionné (caroussel, infos logement et propiétaire, description et équipement contenu dans des menus déroulants)

function Housing() {
  // Création d'une liste contenant l'ensemble des id des logements de la base de donnée
  const listId = Housings.map((housing) => housing.id)

  const { housingId } = useParams()

  // Condition permettant de renvoyer vers la page d'erreur si l'id passé dans l'URL n'appartient pas à la liste des id des logements de la base de donnée
  if (!listId.includes(housingId)) {
    return <Error404 />
  }

  // Création d'une constante contenant uniquement les informations du logement sélectionné
  const housingSelected = Housings.find((housing) => housing.id === housingId)

  return (
    <>
      <Gallery pictures={housingSelected.pictures} />
      <div className="apartment-sheet main-container">
        <ApartmentInformations housingSelected={housingSelected} />
        <div className="apartment_collapses-container ">
          <div className="apartment_collapses-container_description">
            <Collapse
              title="Description"
              content={housingSelected.description}
            />
          </div>
          <div className="apartment_collapses-container_equipement">
            <Collapse
              title="Equipements"
              // Je "mappe" sur les données qui sont sous forme de tableau et les transforment en liste
              content={housingSelected.equipments.map((equipement) => (
                <li key={equipement}>{equipement}</li>
              ))}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Housing
