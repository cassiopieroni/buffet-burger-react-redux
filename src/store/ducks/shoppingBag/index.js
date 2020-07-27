import { createAction, createReducer } from "@reduxjs/toolkit"
import { getNewProduct, getNewBagPrice } from "./helpers"

export const actions = {
	ADD_PRODUCT_TO_BAG: "ADD_PRODUCT_TO_BAG",
	REMOVE_PRODUCT_FROM_BAG: "REMOVE_PRODUCT_FROM_BAG",
	CHANGE_QUANTITY: "CHANGE_QUANTITY",
	CONFIRM_PRODUCTS: "CONFIRM_PRODUCTS",
	CLEAR_SHOPPING_BAG: "CLEAR_SHOPPING_BAG",
}

const INITIAL_STATE = {
	products: [],
	bagPrice: 0,
	isConfirmedBag: false,
}

export const addProductToBag = createAction(actions.ADD_PRODUCT_TO_BAG)
export const removeProductFromBag = createAction(actions.REMOVE_PRODUCT_FROM_BAG)
export const changeQuantity = createAction(actions.CHANGE_QUANTITY)
export const confirmProductsOnBag = createAction(actions.CONFIRM_PRODUCTS)
export const clearShoppingBag = createAction(actions.CLEAR_SHOPPING_BAG)

export default createReducer(INITIAL_STATE, {
	[addProductToBag.type]: (state, action) => {
		const { dishItems, dishPrice } = action.payload
		const newBagProduct = {
			description: dishItems
				.map(item => item.overviewDescription || item.description)
				.join(", "),
			unitPrice: dishPrice,
			quantity: 1,
			subtotal: dishPrice,
			id: Math.floor(Math.random() * 10000),
		}

		return {
			...state,
			products: [...state.products, { ...newBagProduct }],
			bagPrice: state.bagPrice + newBagProduct.subtotal,
			isConfirmedBag: false,
		}
	},

	[changeQuantity.type]: (state, action) => {
		const { product, changeType } = action.payload
		const newProduct = getNewProduct(changeType, product)

		return {
			...state,
			products: state.products.map(pr =>
				pr.id === newProduct.id ? { ...newProduct } : pr
			),
			bagPrice: getNewBagPrice(changeType, state.bagPrice, newProduct.unitPrice),
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
