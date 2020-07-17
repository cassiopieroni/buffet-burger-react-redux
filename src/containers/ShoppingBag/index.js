import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"

import {
	removeProductFromBag,
	increaseQuantity,
	decreaseQuantity,
	confirmProductsOnBag,
} from "../../store/ducks/shoppingBag"
import { addMessage } from "../../store/ducks/messages"

import TableProducts from "../../components/TableProducts"
import Button from "../../components/Button"

import { StyledSection, StyledDiv, StyledDivEmpty } from "./styles"

export default () => {
	const dispatch = useDispatch()

	const { products, bagPrice } = useSelector(state => state.shoppingBag)

	const handleChangeProduct = (changeType, product) => {
		switch (changeType) {
			case "increase":
				return dispatch(increaseQuantity(product))

			case "decrease":
				return dispatch(decreaseQuantity(product))

			case "delete":
				dispatch(removeProductFromBag(product))
				return dispatch(
					addMessage({
						type: "success",
						content: "item removido da sacola com sucesso!",
					})
				)

			default:
				return
		}
	}

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
						<NavLink to={"/buffet"}>
							<Button iconType="burger">comprar mais itens</Button>
						</NavLink>

						<NavLink to={"/delivery"}>
							<Button
								iconType="confirm"
								clicked={() => dispatch(confirmProductsOnBag())}
							>
								confirmar produtos
							</Button>
						</NavLink>
					</StyledDiv>
				</>
			) : (
				<StyledDivEmpty>
					{`Você ainda não possui produtos na sacola, `}
					<NavLink to={"/buffet"}>clique aqui</NavLink>
					{` para adicionar um novo produto!`}
				</StyledDivEmpty>
			)}
		</StyledSection>
	)
}
