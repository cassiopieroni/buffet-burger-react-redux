import { createAction, createReducer } from "@reduxjs/toolkit"

const INITIAL_STATE = {
	messages: [],
}

export const addMessage = createAction("ADD_MESSAGE")
export const removeMessage = createAction("REMOVE_MESSAGE")

export default createReducer(INITIAL_STATE, {
	[addMessage.type]: (state, action) => {
		const { type, content } = action.payload

		return {
			...state,
			messages: [
				...state.messages,
				{
					type,
					content,
					id: Math.floor(Math.random() * 10000),
				},
			],
		}
	},

	[removeMessage.type]: (state, action) => ({
		...state,
		messages: state.messages.filter(msg => msg.id !== action.payload.id),
	}),
})
