import { createReducer, createAction } from "@reduxjs/toolkit"
import buffetData from "../../../data/buffetData"
import requiredItems from "../../../data/requiredItems"
import { getDishPrice, getSummaryItems } from "./helpers"

const INITIAL_STATE = {
	buffetData,
	requiredItems,
	dish: {
		currentSelectedItems: {
			bread: { value: "" },
			burger: { value: "" },
			cheese: { value: "" },
			meatSpot: { value: "" },
			extras: [],
		},
		summaryItems: [],
		subtotal: 0,
	},
}

export const toggleDishItem = createAction("TOGGLE_ITEM")
export const toggleExtraItem = createAction("TOGGLE_EXTRA_ITEM")
export const addExtraItem = createAction("ADD_EXTRA_ITEM")
export const removeExtraItem = createAction("REMOVE_EXTRA_ITEM")
export const clearDish = createAction("CLEAR_DISH")

export default createReducer(INITIAL_STATE, {
	[toggleDishItem.type]: (state, action) => {
		const clickedItem = action.payload
		const prevSelectedItem = state.dish.currentSelectedItems[clickedItem.type]

		const isAlmostSelected = clickedItem.value === prevSelectedItem.value

		const newCurrentSelectedItems = {
			...state.dish.currentSelectedItems,
			[clickedItem.type]: isAlmostSelected ? { value: "" } : clickedItem,
		}
		const newSummaryItems = getSummaryItems(newCurrentSelectedItems)

		return {
			...state,
			dish: {
				...state.dish,
				currentSelectedItems: newCurrentSelectedItems,
				summaryItems: newSummaryItems,
				subtotal: getDishPrice(newSummaryItems),
			},
		}
	},

	[toggleExtraItem.type]: (state, action) => {
		const clickedItem = action.payload
		const prevExtras = state.dish.currentSelectedItems.extras
		const newCurrentSelectedItems = {
			...state.dish.currentSelectedItems,
			extras: prevExtras.some(prev => prev.value === clickedItem.value)
				? prevExtras.filter(prev => prev.value !== clickedItem.value)
				: [...prevExtras, clickedItem],
		}
		const newSummaryItems = getSummaryItems(newCurrentSelectedItems)

		return {
			...state,
			dish: {
				...state.dish,
				currentSelectedItems: newCurrentSelectedItems,
				summaryItems: newSummaryItems,
				subtotal: getDishPrice(newSummaryItems),
			},
		}
	},

	[clearDish.type]: state => ({
		...state,
		dish: { ...INITIAL_STATE.dish },
	}),
})
