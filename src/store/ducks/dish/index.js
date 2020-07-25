import { createReducer, createAction } from "@reduxjs/toolkit"
import { getDishPrice, getSummaryItems } from "./helpers"

const INITIAL_STATE = {
	selectedItems: {
		bread: { value: "" },
		burger: { value: "" },
		cheese: { value: "" },
		meatSpot: { value: "" },
		extras: [],
	},
	summaryItems: [],
	subtotal: 0,
}

export const toggleDishItem = createAction("TOGGLE_ITEM")
export const toggleExtraItem = createAction("TOGGLE_EXTRA_ITEM")
export const clearDish = createAction("CLEAR_DISH")

export default createReducer(INITIAL_STATE, {
	[toggleDishItem.type]: (state, action) => {
		const clickedItem = action.payload
		const prevSelectedItem = state.selectedItems[clickedItem.type]

		const isAlmostSelected = clickedItem.value === prevSelectedItem.value

		const newSelectedItems = {
			...state.selectedItems,
			[clickedItem.type]: isAlmostSelected ? { value: "" } : clickedItem,
		}
		const newSummaryItems = getSummaryItems(newSelectedItems)

		return {
			...state,
			selectedItems: newSelectedItems,
			summaryItems: newSummaryItems,
			subtotal: getDishPrice(newSummaryItems),
		}
	},

	[toggleExtraItem.type]: (state, action) => {
		const clickedItem = action.payload
		const prevExtras = state.selectedItems.extras
		const newSelectedItems = {
			...state.selectedItems,
			extras: prevExtras.some(prev => prev.value === clickedItem.value)
				? prevExtras.filter(prev => prev.value !== clickedItem.value)
				: [...prevExtras, clickedItem],
		}
		const newSummaryItems = getSummaryItems(newSelectedItems)

		return {
			...state,
			selectedItems: newSelectedItems,
			summaryItems: newSummaryItems,
			subtotal: getDishPrice(newSummaryItems),
		}
	},

	[clearDish.type]: () => ({ ...INITIAL_STATE }),
})
