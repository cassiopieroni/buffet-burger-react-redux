export const validatingDish = (dish, requiredItems) => {
	const isSelected = requiredItem =>
		dish.some(item => item.type === requiredItem && item.value !== "empty")

	const errorMessages = requiredItems
		.filter(item => !isSelected(item.type))
		.map(item => item.errorMessage)

	return errorMessages.length ? { isValid: false, errorMessages } : { isValid: true }
}
