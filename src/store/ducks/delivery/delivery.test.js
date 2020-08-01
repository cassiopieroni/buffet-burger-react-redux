import deliveryReducer, { actions } from "./index"

describe("delivery reducer", () => {
	const addressModel = {
		clientName: "nome do usuário",
		cep: "11111000",
		logradouro: "rua do usuário",
		num: "10",
		complemento: "fundos",
		bairro: "bairro do usuário",
		localidade: "cidade do usuário",
		uf: "AA",
	}

	describe(`teste da action '${actions.CHANGE_ADDRESS_VALUE}'`, () => {
		const clientName = "clientName"
		const clientNameValue = "nome do cliente"

		it(`Deve atualizar o campo '${clientName}' com '${clientNameValue}'`, () => {
			const newDeliveryReducerState = deliveryReducer(undefined, {
				type: actions.CHANGE_ADDRESS_VALUE,
				payload: { name: clientName, value: clientNameValue },
			})

			expect(newDeliveryReducerState.address.clientName).toBe(clientNameValue)
		})
	})

	describe(`teste da action '${actions.CLEAR_ADDRESS_FIELDS}'`, () => {
		it(`Deve limpar as props de 'address', exceto 'clientName' e 'cep'`, () => {
			const newDeliveryReducerState = deliveryReducer(
				{ address: addressModel },
				{ type: actions.CLEAR_ADDRESS_FIELDS }
			)

			expect(newDeliveryReducerState.address).toEqual({
				clientName: "nome do usuário",
				cep: "11111000",
				logradouro: "",
				num: "",
				complemento: "",
				bairro: "",
				localidade: "",
				uf: "",
			})
		})

		it(`deve reiniciar as props 'isValidCep', 'deliveryFee' e 'confirmedDelivery'`, () => {
			const newDeliveryReducerState = deliveryReducer(
				{
					address: addressModel,
					isValidCep: true,
					deliveryFee: 10,
					confirmedDelivery: true,
				},
				{ type: actions.CLEAR_ADDRESS_FIELDS }
			)

			expect(newDeliveryReducerState.isValidCep).toBe(false)
			expect(newDeliveryReducerState.deliveryFee).toBe(0)
			expect(newDeliveryReducerState.confirmedDelivery).toBe(false)
		})
	})

	describe(`teste da action '${actions.UPDATE_ADDRESS}'`, () => {
		const payloadModel = {
			logradouro: "dados da rua do usuário",
			bairro: "dados do bairro do usuário",
			localidade: "dados da cidade do usuário",
			uf: "AA",
		}

		it(`Deve atualizar as props 'logradouro', 'bairro', 'localidade' e 'uf' 
        em 'address' com os dados do payload`, () => {
			const newDeliveryReducerState = deliveryReducer(
				{ address: addressModel },
				{
					type: actions.UPDATE_ADDRESS,
					payload: payloadModel,
				}
			)

			expect(newDeliveryReducerState.address).toEqual({
				...addressModel,
				...payloadModel,
			})
		})

		it(`Deve atualizar a prop 'isValidCep' com 'true'`, () => {
			const newDeliveryReducerState = deliveryReducer(
				{ isValidCep: false },
				{
					type: actions.UPDATE_ADDRESS,
					payload: payloadModel,
				}
			)

			expect(newDeliveryReducerState.isValidCep).toBe(true)
		})
	})

	describe(`teste da action '${actions.CONFIRM_DELIVERY}'`, () => {
		it(`Deve retornar a prop 'confirmedDelivery' como 'true'`, () => {
			const newDeliveryReducerState = deliveryReducer(
				{ confirmedDelivery: false },
				{ type: actions.CONFIRM_DELIVERY }
			)

			expect(newDeliveryReducerState.confirmedDelivery).toBe(true)
		})
	})
})
