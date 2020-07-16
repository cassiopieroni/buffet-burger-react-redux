import { createReducer, createAction } from "@reduxjs/toolkit"
import { buffetData } from "./buffetData"
import { getDishPrice, getSummaryItems, getNewExtraItems } from "./helpers"

const INITIAL_STATE = {
	buffetData,
	dish: {
		currentSelectedItems: {
			bread: { value: "empty" },
			burger: { value: "empty" },
			cheese: { value: "empty" },
			meatSpot: { value: "empty" },
			extras: [],
		},
		summaryItems: [],
		subtotal: 0,
	},
}

export const changeDishItem = createAction("CHANGE_ITEM")
export const toggleDishExtraItem = createAction("TOGGLE_EXTRA_ITEM")
export const clearDish = createAction("CLEAR_DISH")

export default createReducer(INITIAL_STATE, {
	[changeDishItem.type]: (state, action) => {
		const { name, value } = action.payload
		const selectedItem = state.buffetData[name].find(item => item.value === value)

		const newCurrentSelectedItems = {
			...state.dish.currentSelectedItems,
			[selectedItem.type]: selectedItem,
		}

		const newSummaryItems = getSummaryItems(newCurrentSelectedItems)

		return {
			...state,
			dish: {
				currentSelectedItems: newCurrentSelectedItems,
				summaryItems: newSummaryItems,
				subtotal: getDishPrice(newSummaryItems),
			},
		}
	},

	[toggleDishExtraItem.type]: (state, action) => {
		const newCurrentSelectedItems = {
			...state.dish.currentSelectedItems,
			extras: getNewExtraItems(
				state.dish.currentSelectedItems.extras,
				action.payload
			),
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
