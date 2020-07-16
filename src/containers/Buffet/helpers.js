export const validatingDish = dish => {
	const requiredItems = [
		{ type: "bread", errorMessage: "Selecione o pão" },
		{ type: "burger", errorMessage: "Selecione o hamburguer" },
		{ type: "meatSpot", errorMessage: "Selecione o ponto do hamburguer" },
	]

	const isSelected = requiredItem =>
		dish.some(item => item.type === requiredItem && item.value !== "empty")

	const errorMessages = requiredItems
		.filter(item => !isSelected(item.type))
		.map(item => item.errorMessage)

	return errorMessages.length ? { isValid: false, errorMessages } : { isValid: true }
}
