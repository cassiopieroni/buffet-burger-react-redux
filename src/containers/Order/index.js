import React, { useState, useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

import { confirmOrder } from "../../store/ducks/orders"
import { clearDish } from "../../store/ducks/dish"
import { clearShoppingBag } from "../../store/ducks/shoppingBag"
import { clearDelivery } from "../../store/ducks/delivery"
import { addMessage } from "../../store/ducks/messages"

import RouteRedirector from "../RouteRedirector"

import TableProducts from "../../components/TableProducts"
import NumToReal from "../../components/NumToReal"
import Button from "../../components/Button"
import Spinner from "../../components/Spinner"

import {
	StyledSection,
	StyledDivWrapper,
	StyledDivWrapperBtnBlue,
	StyledDivWrapperBtns,
	StyledDiv,
	StyledP,
} from "./styles"

const OrderConfirmed = () => {
	const order = useSelector(state => state.orders[0])
	const history = useHistory()
	const dispatch = useDispatch()

	const [loading, setLoading] = useState(false)

	const handleConfirmOrder = useCallback(
		id => {
			setLoading(true)
			setTimeout(() => {
				dispatch(clearDish())
				dispatch(clearShoppingBag())
				dispatch(clearDelivery())
				dispatch(confirmOrder(id))
				dispatch(
					addMessage({
						type: "success",
						content: "Pedido Confirmado!",
					})
				)
				setLoading(false)
			}, 2000)
		},
		[dispatch]
	)

	if (!order) {
		return <RouteRedirector />
	}

	const {
		address,
		deliveryFee,
		products,
		productsPrice,
		amount,
		id,
		isConfirmedOrder,
	} = order

	return (
		<StyledSection>
			<h2>Resumo do seu pedido:</h2>
			<StyledDivWrapper>
				<TableProducts
					products={products}
					subTotal={productsPrice}
					bagPrice={productsPrice}
				/>

				{!isConfirmedOrder && (
					<StyledDivWrapperBtnBlue>
						<Button iconType="burger" clicked={() => history.push("/buffet")}>
							Adicionar mais itens
						</Button>

						<Button
							iconType="shoppingBag"
							clicked={() => history.push("/shopping-bag")}
						>
							Alterar itens da sacola
						</Button>
					</StyledDivWrapperBtnBlue>
				)}
			</StyledDivWrapper>

			<StyledDivWrapper>
				<h3>Dados de entrega:</h3>

				<StyledDiv>
					<p>{address.clientName}</p>
					<p>{`cep: ${address.cep}`}</p>
					<p>{`${address.logradouro}, ${address.num} ${address.complemento}`}</p>
					<p>{`${address.bairro}. ${address.localidade}, ${address.uf}`}</p>
					<p>
						Taxa de entrega: <NumToReal num={deliveryFee} />{" "}
					</p>
				</StyledDiv>

				{!isConfirmedOrder && (
					<StyledDivWrapperBtnBlue>
						<Button
							iconType="location"
							clicked={() => history.push("/delivery")}
						>
							Alterar entrega
						</Button>
					</StyledDivWrapperBtnBlue>
				)}
			</StyledDivWrapper>

			<StyledDivWrapper>
				<p>
					Total a pagar: <NumToReal num={amount} />
				</p>

				{loading ? (
					<Spinner />
				) : isConfirmedOrder ? (
					<StyledP>Pedido Confirmado!</StyledP>
				) : (
					<StyledDivWrapperBtns>
						<Button
							iconType="confirmedBurger"
							clicked={() => handleConfirmOrder(id)}
						>
							Confirmar pedido
						</Button>
					</StyledDivWrapperBtns>
				)}
			</StyledDivWrapper>
		</StyledSection>
	)
}

export default OrderConfirmed
