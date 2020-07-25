import { updateRequiredItems } from "../ducks/initialData"
import requiredItems from "../../data/requiredItems"

//ESTE ARQUIVO APENAS SIMULA UMA BUSCA DE DADOS.
export const fetchRequiredItems = () => {
	return dispatch => {
		dispatch(updateRequiredItems(requiredItems))
	}
}
