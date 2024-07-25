import { useParams } from 'react-router-dom'
import Housings from '../../Datas/housings.json'
import Error404 from '../Error404/error404'

function Housing() {
  //  si id includes dans le tableau json alors affichage fiche housing sinon renvoie a la page error404
  const listId = Housings.map((housing) => housing.id)
  console.log(listId)

  const { housingId } = useParams()
  console.log(housingId)

  if (!listId.includes(housingId)) {
    return <Error404 />
  } else {
    return <p>Fiche logement {housingId} </p>
  }
}

export default Housing
