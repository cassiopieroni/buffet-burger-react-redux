export const decreasingQuantity = product => ({
	...product,
	quantity: product.quantity - 1,
	subtotal: product.subtotal - product.unitPrice,
})

export const increasingQuantity = product => ({
	...product,
	quantity: product.quantity + 1,
	subtotal: product.subtotal + product.unitPrice,
})
