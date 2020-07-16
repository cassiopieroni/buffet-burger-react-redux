import { updateAddressWithFetchedData, clearAddressFields } from "../ducks/delivery"
import { addMessage } from "../ducks/messages"

const BASE_URL = `https://viacep.com.br/ws`
const RES_TYPE = `json/`

export const fetchAddress = cep => {
	return dispatch => {
		fetch(`${BASE_URL}/${cep}/${RES_TYPE}`)
			.then(res => res.json())
			.then(data => {
				if (data.erro) {
					dispatch(
						addMessage({ type: "error", content: "cep não encontrado!" })
					)
					dispatch(clearAddressFields())
				} else dispatch(updateAddressWithFetchedData(data))
			})
			.catch(console.log)
	}
}
