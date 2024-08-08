import { useParams } from 'react-router-dom'
import Housings from '../../Datas/housings.json'
import Error404 from '../Error404/error404'
import Gallery from '../../Components/Gallery/gallery'
import ApartmentInformations from '../../Components/Apartment-informations/apartment-informations'
import Collapse from '../../Components/Collapse/collapse'
import '../../Pages/Housing/housing.scss'

function Housing() {
  //  si id includes dans le tableau json alors affichage fiche housing sinon renvoie a la page error404
  const listId = Housings.map((housing) => housing.id)

  const { housingId } = useParams()

  if (!listId.includes(housingId)) {
    return <Error404 />
  }

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
