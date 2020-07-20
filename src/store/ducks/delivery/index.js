import { createReducer, createAction } from "@reduxjs/toolkit"

const INITIAL_STATE = {
	form: {
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
		payment: {
			method: "",
			changeOfMoney: "",
		},
	},
	isValidCep: false,
	//isFetchingData: false,
	deliveryFee: 0,
	confirmedDelivery: false,
}

export const changeAddressValue = createAction("CHANGE_ADDRESS_VALUE")
export const clearAddressFields = createAction("CLEAR_ADDRESS_FIELDS")
export const waitingFetchAddress = createAction("WAITING_FETCH_ADDRESS")
export const updateAddressWithFetchedData = createAction("UPDATE_ADDRESS")
export const changePayment = createAction("CHANGE_PAYMENT")
export const clearDelivery = createAction("CLEAR_DELIVERY")
export const confirmDelivery = createAction("CONFIRM_DELIVERY")

export default createReducer(INITIAL_STATE, {
	[changeAddressValue.type]: (state, action) => ({
		...state,
		form: {
			...state.form,
			address: {
				...state.form.address,
				[action.payload.name]: action.payload.value,
			},
		},
		confirmedDelivery: false,
	}),

	[clearAddressFields.type]: state => ({
		...state,
		form: {
			...state.form,
			address: {
				...INITIAL_STATE.form.address,
				cep: state.form.address.cep,
				clientName: state.form.address.clientName,
			},
		},
		isValidCep: false,
		//isFetchingData: false,
		deliveryFee: 0,
		confirmedDelivery: false,
	}),

	[waitingFetchAddress.type]: state => ({
		...state,
		form: {
			...state.form,
			address: {
				...state.form.address,
				logradouro: "buscando dados...",
				num: "",
				complemento: "",
				bairro: "buscando dados...",
				localidade: "buscando dados...",
				uf: "buscando dados...",
			},
		},
		isValidCep: false,
		confirmedDelivery: false,
		//isFetchingData: true,
	}),

	[updateAddressWithFetchedData.type]: (state, action) => ({
		...state,
		form: {
			...state.form,
			address: {
				...state.form.address,
				logradouro: action.payload.logradouro,
				bairro: action.payload.bairro,
				localidade: action.payload.localidade,
				uf: action.payload.uf,
			},
		},
		isValidCep: true,
		//isFetchingData: false,
		deliveryFee: 7,
		confirmedDelivery: false,
	}),

	[changePayment.type]: (state, action) => ({
		...state,
		form: {
			...state.form,
			payment: {
				...state.form.payment,
				[action.payload.name]: action.payload.value,
			},
		},
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
