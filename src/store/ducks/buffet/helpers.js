export const getSummaryItems = dishSections => {
	const { meatSpot, bread, burger, cheese, extras } = dishSections
	const items = [meatSpot, bread, burger, cheese, ...extras]

	return items.filter(item => item && item.value)
}

export const getDishPrice = dishItems =>
	dishItems.reduce((accPrice, item) => {
		return item && item.price ? accPrice + item.price : accPrice
	}, 0)
