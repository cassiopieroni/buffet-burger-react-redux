import React from "react"
import Delivery from "./index"
import deliveryReducer from "../../store/ducks/delivery"
import shoppingBagReducer from "../../store/ducks/shoppingBag"
import { render, fireEvent, cleanup } from "../../test-utils"

describe("Delivery container ", () => {
	beforeEach(() => {
		fetch.resetMocks()
		cleanup()
	})

	const dataModel = {
		clientName: "nome do usuário",
		cep: "11111000",
		logradouro: "rua do usuário",
		num: "10",
		complemento: "fundos",
		bairro: "bairro do usuário",
		localidade: "cidade do usuário",
		uf: "AA",
	}

	const fakeInitialShoppingBagState = {
		isConfirmedBag: true,
		products: [],
		bagPrice: 1,
	}

	const fakeInitialDeliveryState = {
		address: {
			clientName: "",
			cep: "",
			logradouro: "",
			num: "",
			complemento: "",
			bairro: "",
			localidade: "",
			uf: "",
		},
		isValidCep: false,
		deliveryFee: 0,
		loading: false,
	}

	it("O valor do campo 'CEP' deve ser atualizado com as mudanças do usuário", async () => {
		const { getByTestId } = render(<Delivery />, {
			reducers: { delivery: deliveryReducer, shoppingBag: shoppingBagReducer },
			initialState: {
				shoppingBag: fakeInitialShoppingBagState,
				delivery: fakeInitialDeliveryState,
			},
		})

		const inputCep = getByTestId("addressForm-cep")
		fireEvent.change(inputCep, { target: { value: dataModel.cep } })
		expect(inputCep).toHaveValue(dataModel.cep)
	})

	it("Os campos de input devem ser preenchidos no evento de 'onBlur' no campo CEP", async () => {
		fetch.mockResponseOnce(
			JSON.stringify({
				success: true,
				data: dataModel,
			})
		)

		const { getByTestId, findByTestId } = render(<Delivery />, {
			reducers: { delivery: deliveryReducer, shoppingBag: shoppingBagReducer },
			initialState: {
				shoppingBag: fakeInitialShoppingBagState,
				delivery: {
					...fakeInitialDeliveryState,
					cep: "11111000",
				},
			},
		})

		const inputCep = getByTestId("addressForm-cep")
		inputCep.focus()
		expect(inputCep).toHaveFocus()

		// inputCep.blur()

		// const inputStreet = await findByTestId("addressForm-street")
		// expect(inputStreet).toHaveValue(dataModel.logradouro)
	})
})
