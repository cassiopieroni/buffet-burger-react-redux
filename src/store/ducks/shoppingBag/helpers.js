import { increase, decrease } from "./constants"

export const getNewProduct = (type, product) => {
	const decreasingQuantity = () => ({
		...product,
		quantity: product.quantity - 1,
		subtotal: product.subtotal - product.unitPrice,
	})
	const increasingQuantity = () => ({
		...product,
		quantity: product.quantity + 1,
		subtotal: product.subtotal + product.unitPrice,
	})

	switch (type) {
		case increase:
			return increasingQuantity()
		case decrease:
			return decreasingQuantity()
		default:
			return product
	}
}

export const getNewBagPrice = (type, oldPrice, productPrice) => {
	switch (type) {
		case increase:
			return oldPrice + productPrice
		case decrease:
			return oldPrice - productPrice
		default:
			return oldPrice
	}
}
