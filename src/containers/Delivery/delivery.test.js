import React from "react"
import { render, fireEvent, cleanup, waitForElementToBeRemoved } from "../../test-utils"
import userEvent from "@testing-library/user-event"

import Delivery from "./index"
import deliveryReducer from "../../store/ducks/delivery"
import shoppingBagReducer from "../../store/ducks/shoppingBag"

const mockHistoryPush = jest.fn()
jest.mock("react-router-dom", () => ({
	useHistory: () => ({
		push: mockHistoryPush,
	}),
}))

describe("Delivery container ", () => {
	beforeEach(() => {
		fetch.resetMocks()
		cleanup()
	})

	const fakeFetchedAddress = {
		logradouro: "rua do usuário",
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
		fireEvent.change(inputCep, { target: { value: "00000111" } })
		expect(inputCep).toHaveValue("00000111")
	})

	it(`Quando houver o evento 'blur' no campo 'CEP', o campo 'Rua' deve receber o 
	valor da API de endereços (data.logradouro) referente ao valor de CEP`, async () => {
		fetch.mockResponseOnce(JSON.stringify(fakeFetchedAddress))

		const { getByTestId } = render(<Delivery />, {
			reducers: { delivery: deliveryReducer, shoppingBag: shoppingBagReducer },
			initialState: {
				shoppingBag: fakeInitialShoppingBagState,
				delivery: fakeInitialDeliveryState,
			},
		})

		const inputCep = getByTestId("addressForm-cep")
		fireEvent.change(inputCep, { target: { value: "00000111" } })
		inputCep.focus()
		userEvent.tab() // onBlur simulate

		await waitForElementToBeRemoved(() => getByTestId("form-loading"))

		expect(fetch).toHaveBeenCalledTimes(1)
		expect(getByTestId("addressForm-street")).toHaveValue(
			fakeFetchedAddress.logradouro
		)
	})

	it(`Ao submeter o formulário (com todos os campos preenchidos corretamente), 
	deve encaminhar o usuário para a página seguinte`, async () => {
		const fakeDeliveryState = {
			address: {
				...fakeFetchedAddress,
				num: "10",
				clientName: "nome do cliente",
				cep: "11111000",
			},
			isValidCep: true,
			deliveryFee: 7,
			loading: false,
		}

		const { getByTestId } = render(<Delivery />, {
			reducers: {
				delivery: deliveryReducer,
				shoppingBag: shoppingBagReducer,
			},
			initialState: {
				shoppingBag: fakeInitialShoppingBagState,
				delivery: fakeDeliveryState,
			},
		})

		const buttonConfirmAddress = getByTestId("btn-confirmAddress")
		fireEvent.click(buttonConfirmAddress)

		expect(mockHistoryPush).toHaveBeenCalledTimes(1)
	})
})
