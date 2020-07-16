export const getSummaryItems = dishSections => {
	const { meatSpot, bread, burger, cheese, extras } = dishSections
	const items = [meatSpot, bread, burger, cheese, ...extras]

	return items.filter(item => item.value !== "empty")
}

export const getDishPrice = dishItems =>
	dishItems.reduce((accPrice, item) => {
		return item && item.price ? accPrice + item.price : accPrice
	}, 0)

export const getNewExtraItems = (prevExtras, newExtraItem) => {
	const removedExtraItem = () =>
		prevExtras.filter(extra => extra.value !== newExtraItem.value)
	const addedExtraItem = () => [...prevExtras, newExtraItem]

	const isExtraItem = prevExtras.some(extra => extra.value === newExtraItem.value)

	return isExtraItem ? removedExtraItem() : addedExtraItem()
}
