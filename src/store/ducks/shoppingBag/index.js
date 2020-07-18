import { createAction, createReducer } from "@reduxjs/toolkit"
import { decreasingQuantity, increasingQuantity } from "./helpers"

const INITIAL_STATE = {
	products: [],
	bagPrice: 0,
	isConfirmedBag: false,
}

export const addProductToBag = createAction("ADD_PRODUCT_TO_BAG")
export const removeProductFromBag = createAction("REMOVE_PRODUCT_FROM_BAG")
export const increaseQuantity = createAction("INCREASE_QUANTITY")
export const decreaseQuantity = createAction("DECREASE_QUANTITY")
export const confirmProductsOnBag = createAction("CONFIRM_PRODUCTS")
export const clearShoppingBag = createAction("CLEAR_SHOPPING_BAG")

export default createReducer(INITIAL_STATE, {
	[addProductToBag.type]: (state, action) => {
		const { payload } = action

		const newBagProduct = {
			description: payload.dishItems
				.map(item => item.overviewDescription || item.description)
				.join(", "),
			unitPrice: payload.dishPrice,
			quantity: 1,
			subtotal: payload.dishPrice,
			id: Math.floor(Math.random() * 10000),
		}

		return {
			...state,
			products: [...state.products, { ...newBagProduct }],
			bagPrice: state.bagPrice + newBagProduct.subtotal,
			isConfirmedBag: false,
		}
	},

	[decreaseQuantity.type]: (state, action) => {
		if (action.payload.quantity > 1) {
			const newProduct = decreasingQuantity(action.payload)

			return {
				...state,
				products: state.products.map(pr =>
					pr.id === newProduct.id ? { ...newProduct } : pr
				),
				bagPrice: state.bagPrice - newProduct.unitPrice,
				isConfirmedBag: false,
			}
		} else {
			return state
		}
	},

	[increaseQuantity.type]: (state, action) => {
		const newProduct = increasingQuantity(action.payload)

		return {
			...state,
			products: state.products.map(pr =>
				pr.id === newProduct.id ? { ...newProduct } : pr
			),
			bagPrice: state.bagPrice + newProduct.unitPrice,
			isConfirmedBag: false,
		}
	},

	[removeProductFromBag.type]: (state, action) => ({
		...state,
		products: state.products.filter(pr => pr.id !== action.payload.id),
		bagPrice: state.bagPrice - action.payload.subtotal,
		isConfirmedBag: false,
	}),

	[confirmProductsOnBag.type]: state => ({
		...state,
		isConfirmedBag: true,
	}),

	[clearShoppingBag.type]: () => ({
		...INITIAL_STATE,
	}),
})
