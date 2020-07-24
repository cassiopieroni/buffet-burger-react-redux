import React, { useCallback } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

import {
	removeProductFromBag,
	changeQuantity,
	confirmProductsOnBag,
} from "../../store/ducks/shoppingBag"
import { addMessage } from "../../store/ducks/messages"
import { deletePr } from "../../store/ducks/shoppingBag/constants"

import RouteRedirector from "../RouteRedirector"

import TableProducts from "../../components/TableProducts"
import Button from "../../components/Button"

import { StyledSection, StyledDiv } from "./styles"

export default () => {
	const dispatch = useDispatch()
	const history = useHistory()

	const { products, bagPrice } = useSelector(state => state.shoppingBag)

	const handleChangeProduct = useCallback(
		(changeType, product) => {
			if (changeType === deletePr) {
				dispatch(removeProductFromBag(product))
				dispatch(
					addMessage({
						type: "success",
						content: "item removido da sacola com sucesso!",
					})
				)
			} else {
				dispatch(changeQuantity({ product, changeType }))
			}
		},
		[dispatch]
	)

	const handleConfirmProducts = useCallback(() => {
		dispatch(confirmProductsOnBag())
		history.push("/delivery")
	}, [dispatch, history])

	return (
		<StyledSection>
			<h2>Sacola de compras:</h2>

			{products && products.length ? (
				<>
					<TableProducts
						products={products}
						bagPrice={bagPrice}
						changeProduct={handleChangeProduct}
					/>

					<StyledDiv>
						<Button iconType="burger" clicked={() => history.push("/buffet")}>
							comprar mais itens
						</Button>

						<Button iconType="confirm" clicked={handleConfirmProducts}>
							confirmar produtos
						</Button>
					</StyledDiv>
				</>
			) : (
				<RouteRedirector />
			)}
		</StyledSection>
	)
}
