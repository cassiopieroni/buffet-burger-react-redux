import { createReducer, createAction } from "@reduxjs/toolkit"

const INITIAL_STATE = []

export const addNewConfirmedOrder = createAction("CONFIRM_NEW_ORDER")

export default createReducer(INITIAL_STATE, {
	[addNewConfirmedOrder.type]: (state, action) => {
		const { products, bagPrice, form, deliveryFee } = action.payload

		const newOrder = {
			address: form.address,
			deliveryFee,
			products,
			productsPrice: bagPrice,
			payment: form.payment,
			amount: bagPrice + deliveryFee,
		}

		return [newOrder, ...state]
	},
})
