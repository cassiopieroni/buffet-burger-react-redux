import { createReducer, createAction } from "@reduxjs/toolkit"

const INITIAL_STATE = []

export const addNewOrder = createAction("ADD_NEW_ORDER")
export const confirmOrder = createAction("CONFIRM_ORDER")

export default createReducer(INITIAL_STATE, {
	[addNewOrder.type]: (state, action) => {
		const { products, bagPrice, address, deliveryFee } = action.payload

		const newOrder = {
			address,
			deliveryFee,
			products,
			productsPrice: bagPrice,
			amount: bagPrice + deliveryFee,
			id: Math.floor(Math.random() * 10000),
			isConfirmedOrder: false,
		}

		return [newOrder, ...state]
	},

	[confirmOrder.type]: (state, action) => {
		const id = action.payload

		return state.map(order =>
			order.id === id ? { ...order, isConfirmedOrder: true } : order
		)
	},
})
