import { updateBuffetData } from "../ducks/initialData"
import buffetData from "../../data/buffetData"

//ESTE ARQUIVO APENAS SIMULA UMA BUSCA DE DADOS.
export const fetchBuffetData = () => {
	return dispatch => {
		dispatch(updateBuffetData(buffetData))
	}
}
