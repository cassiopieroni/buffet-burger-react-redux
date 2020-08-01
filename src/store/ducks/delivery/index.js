import { createReducer, createAction } from "@reduxjs/toolkit"

export const actions = {
	CHANGE_ADDRESS_VALUE: "CHANGE_ADDRESS_VALUE",
	CLEAR_ADDRESS_FIELDS: "CLEAR_ADDRESS_FIELDS",
	WAITING_FETCH_ADDRESS: "WAITING_FETCH_ADDRESS",
	UPDATE_ADDRESS: "UPDATE_ADDRESS",
	CLEAR_DELIVERY: "CLEAR_DELIVERY",
	CONFIRM_DELIVERY: "CONFIRM_DELIVERY",
}

export const INITIAL_STATE = {
	address: {
		clientName: "",
		cep: "",
		logradouro: "",
		num: "",
		complemento: "",
		bairro: "",
		localidade: "",
		uf: "",
	},
	isValidCep: false,
	deliveryFee: 0,
	confirmedDelivery: false,
	loading: false,
}

export const changeAddressValue = createAction(actions.CHANGE_ADDRESS_VALUE)
export const clearAddressFields = createAction(actions.CLEAR_ADDRESS_FIELDS)
export const waitingFetchAddress = createAction(actions.WAITING_FETCH_ADDRESS)
export const updateAddressWithFetchedData = createAction(actions.UPDATE_ADDRESS)
export const clearDelivery = createAction(actions.CLEAR_DELIVERY)
export const confirmDelivery = createAction(actions.CONFIRM_DELIVERY)

export default createReducer(INITIAL_STATE, {
	[changeAddressValue.type]: (state, action) => ({
		...state,
		address: {
			...state.address,
			[action.payload.name]: action.payload.value,
		},
		confirmedDelivery: false,
	}),

	[clearAddressFields.type]: state => ({
		...state,
		address: {
			...INITIAL_STATE.address,
			cep: state.address.cep,
			clientName: state.address.clientName,
		},
		isValidCep: false,
		deliveryFee: 0,
		confirmedDelivery: false,
	}),

	[waitingFetchAddress.type]: (state, action) => ({
		...state,
		loading: action.payload,
		isValidCep: false,
		confirmedDelivery: false,
	}),

	[updateAddressWithFetchedData.type]: (state, action) => ({
		...state,
		address: {
			...state.address,
			logradouro: action.payload.logradouro,
			bairro: action.payload.bairro,
			localidade: action.payload.localidade,
			uf: action.payload.uf,
		},
		isValidCep: true,
		loading: false,
		deliveryFee: 7,
		confirmedDelivery: false,
	}),

	[clearDelivery.type]: () => ({
		...INITIAL_STATE,
	}),

	[confirmDelivery.type]: state => ({
		...state,
		confirmedDelivery: true,
	}),
})
