import React, { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

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
import Spinner from "../../components/Spinner"

import { StyledSection, StyledForm, StyledDiv, StyledDivLoading } from "./styles"

const Delivery = () => {
	const dispatch = useDispatch()
	const history = useHistory()

	const { isConfirmedBag, products, bagPrice } = useSelector(state => state.shoppingBag)
	const { address, isValidCep, deliveryFee, loading } = useSelector(
		state => state.delivery
	)

	const { cep, clientName, num } = address

	const handleOnBlurFetchAddress = useCallback(() => {
		const regExpCEP = cep.replace(/\D/g, "")
		const validateCep = /^[0-9]{8}$/

		if (regExpCEP !== "") {
			if (validateCep.test(regExpCEP)) {
				dispatch(waitingFetchAddress(true))
				dispatch(fetchAddress(regExpCEP))
			} else {
				dispatch(waitingFetchAddress(false))
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
		const isValidFields = isValidCep && clientName && num
		if (isValidFields) {
			const orderData = { products, bagPrice, address, deliveryFee }
			confirmingDeliveryData(orderData)
			history.push("/order")
		} else {
			dispatch(
				addMessage({
					type: "error",
					content: "Preencha os campos para prosseguir!",
				})
			)
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
					addressForm={address}
				/>

				<StyledDiv>
					<p>
						Taxa de entrega:
						<span>
							{deliveryFee ? <NumToReal num={deliveryFee} /> : "..."}
						</span>
					</p>
				</StyledDiv>

				<Button
					iconType="confirm"
					buttonType="submit"
					testid="btn-confirmAddress"
				>
					Confirmar dados de entrega
				</Button>
			</StyledForm>

			{loading && (
				<StyledDivLoading data-testid="form-loading">
					<Spinner />
				</StyledDivLoading>
			)}
		</StyledSection>
	)
}

export default Delivery
