import React from "react"
import Delivery from "./index"
import deliveryReducer from "../../store/ducks/delivery"
import shoppingBagReducer from "../../store/ducks/shoppingBag"
import { render, fireEvent, cleanup, waitForElementToBeRemoved } from "../../test-utils"
import userEvent from "@testing-library/user-event"

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

	it("Os campos de input devem ser preenchidos no evento de 'onBlur' no campo CEP", async () => {
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
})
