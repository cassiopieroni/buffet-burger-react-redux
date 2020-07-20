import React, { useState, useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { NavLink, useHistory } from "react-router-dom"

import { confirmOrder } from "../../store/ducks/orders"

import NotFoundOrder from "../../components/NotFoundOrder"
import TableProducts from "../../components/TableProducts"
import NumToReal from "../../components/NumToReal"
import Button from "../../components/Button"

import { StyledSection, StyledDivWrapperTable, StyledDiv } from "./styles"

const OrderConfirmed = () => {
	const order = useSelector(state => state.orders[0])
	const history = useHistory()
	const dispatch = useDispatch()

	const [loading, setLoading] = useState(false)

	const handleConfirmOrder = useCallback(
		id => {
			setLoading(true)
			setTimeout(() => {
				dispatch(confirmOrder(id))
				setLoading(false)
			}, 2000)
		},
		[dispatch]
	)

	if (!order) {
		return <NotFoundOrder />
	}

	const {
		address,
		deliveryFee,
		products,
		productsPrice,
		payment,
		amount,
		id,
		isConfirmedOrder,
	} = order

	return (
		<StyledSection>
			<h2>Resumo do seu pedido:</h2>

			<StyledDivWrapperTable>
				<TableProducts
					products={products}
					subTotal={productsPrice}
					bagPrice={productsPrice}
				/>
			</StyledDivWrapperTable>

			<Button iconType="burger" clicked={() => history.push("/buffet")}>
				Adicionar mais itens
			</Button>

			<Button iconType="shoppingBag" clicked={() => history.push("/shopping-bag")}>
				Alterar itens da sacola
			</Button>

			<h2>Dados de entrega:</h2>

			<StyledDiv>
				<p>{address.clientName}</p>
				<p>{`cep: ${address.cep}`}</p>
				<p>{`${address.logradouro}, ${address.num} ${address.complemento}`}</p>
				<p>{`${address.bairro}. ${address.localidade}, ${address.uf}`}</p>
			</StyledDiv>

			<StyledDiv>
				<h3>
					Taxa de entrega: <NumToReal num={deliveryFee} />{" "}
				</h3>
				<h3>
					Total a pagar: <NumToReal num={amount} />{" "}
				</h3>

				{payment.method === "dinheiro" ? (
					<p>
						{`Pague na entrega, em ${payment.method}`}
						{payment.changeOfMoney &&
							` (troco para: ${payment.changeOfMoney})`}
					</p>
				) : (
					<p>{`Pague na entrega com ${payment.method}.`}</p>
				)}

				<Button iconType="location" clicked={() => history.push("/delivery")}>
					Alterar dados de entrega
				</Button>
			</StyledDiv>

			{loading ? (
				"...LOADING..."
			) : isConfirmedOrder ? (
				"Pedido Confirmado!"
			) : (
				<Button iconType="confirmedBurger" clicked={() => handleConfirmOrder(id)}>
					Confirmar pedido
				</Button>
			)}
		</StyledSection>
	)
}

export default OrderConfirmed
