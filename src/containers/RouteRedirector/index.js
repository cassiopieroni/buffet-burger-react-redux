import React from "react"
import { Redirect } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addMessage } from "../../store/ducks/messages"

import NotFoundPage from "../../components/NotFoundPage"

const RouteRedirector = () => {
	const dispatch = useDispatch()

	const { products, isConfirmedBag } = useSelector(state => state.shoppingBag)
	const { confirmedDelivery } = useSelector(state => state.delivery)

	if (!products.lenght) {
		dispatch(
			addMessage({
				type: "error",
				content: "Adicione seu primeiro item na sacola de compras",
			})
		)
		return <Redirect to="/buffet" />
	} else if (!isConfirmedBag) {
		dispatch(
			addMessage({
				type: "error",
				content: "Confirme os items em sua sacola de compras",
			})
		)
		return <Redirect to="/shopping-bag" />
	} else if (!confirmedDelivery) {
		dispatch(
			addMessage({
				type: "error",
				content: "Confirme o endereço de entrega!",
			})
		)
		return <Redirect to="/delivery" />
	} else return <NotFoundPage />
}

export default RouteRedirector
