import { createReducer, createAction } from "@reduxjs/toolkit"

const INITIAL_STATE = {
	buffetData: {},
	requiredItems: [],
}

export const updateBuffetData = createAction("UPDATE_BUFFET_DATA")
export const updateRequiredItems = createAction("UPDATE_REQUIRED_ITEMS")

export default createReducer(INITIAL_STATE, {
	[updateBuffetData.type]: (state, action) => ({
		...state,
		buffetData: action.payload,
	}),

	[updateRequiredItems.type]: (state, action) => ({
		...state,
		requiredItems: action.payload,
	}),
})
