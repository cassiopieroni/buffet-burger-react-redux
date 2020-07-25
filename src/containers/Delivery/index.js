import React, { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"

import { addMessage } from "../../store/ducks/messages"
import {
	changeAddressValue,
	clearAddressFields,
	waitingFetchAddress,
	confirmDelivery,
} from "../../store/ducks/delivery"
import { addNewOrder } from "../../store/ducks/orders"

import { fetchAddress } from "../../store/fetchActions/fetchAddress"

import RouteRedirector from "../RouteRedirector"

import DeliveryForm from "../../components/DeliveryForm"
import NumToReal from "../../components/NumToReal"
import Button from "../../components/Button"

import { StyledSection, StyledForm, StyledDiv } from "./styles"

const Delivery = props => {
	const dispatch = useDispatch()

	const { isConfirmedBag, products, bagPrice } = useSelector(state => state.shoppingBag)
	const { form, isValidCep, deliveryFee } = useSelector(state => state.delivery)

	const { cep } = form.address

	const handleOnBlurFetchAddress = useCallback(() => {
		const regExpCEP = cep.replace(/\D/g, "")
		const validateCep = /^[0-9]{8}$/

		if (regExpCEP !== "") {
			if (validateCep.test(regExpCEP)) {
				dispatch(waitingFetchAddress())
				dispatch(fetchAddress(regExpCEP))
			} else {
				dispatch(addMessage({ type: "error", content: "CEP inválido" }))
				dispatch(clearAddressFields())
			}
		} else {
			dispatch(clearAddressFields())
		}
	}, [dispatch, cep])

	const handleChangeAddress = useCallback(
		e => {
			const { name, value } = e.target
			dispatch(changeAddressValue({ name, value }))
		},
		[dispatch]
	)

	const handleClickSubmit = e => {
		e.preventDefault()

		if (isValidCep) {
			const orderData = { products, bagPrice, form, deliveryFee }
			confirmingDeliveryData(orderData)
			props.history.push("/order")
		} else {
			dispatch(addMessage({ type: "error", content: "CEP não encontrado!" }))
		}
	}

	const confirmingDeliveryData = order => {
		dispatch(confirmDelivery())
		dispatch(addNewOrder(order))
		dispatch(addMessage({ type: "success", content: "endereço confirmado!" }))
	}

	return !isConfirmedBag ? (
		<RouteRedirector />
	) : (
		<StyledSection>
			<h2>Dados de entrega</h2>

			<StyledForm onSubmit={handleClickSubmit}>
				<DeliveryForm
					fetchingAddress={handleOnBlurFetchAddress}
					changeAddress={handleChangeAddress}
					addressForm={form.address}
				/>

				<StyledDiv>
					<p>
						Taxa de entrega:
						<span>
							{deliveryFee ? <NumToReal num={deliveryFee} /> : "..."}
						</span>
					</p>
				</StyledDiv>

				<Button iconType="confirm" buttonType="submit">
					Confirmar dados de entrega
				</Button>
			</StyledForm>
		</StyledSection>
	)
}

export default Delivery
