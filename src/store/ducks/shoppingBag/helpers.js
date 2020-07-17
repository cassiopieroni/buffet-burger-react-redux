export const createNewDish = payload => ({
	description: payload.dishItems
		.map(item => item.overviewDescription || item.description)
		.join(", "),
	unitPrice: payload.dishPrice,
	quantity: 1,
	subtotal: payload.dishPrice,
	id: Math.floor(Math.random() * 10000),
})

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
