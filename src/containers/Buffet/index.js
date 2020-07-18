import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { toggleDishItem, toggleExtraItem, clearDish } from "../../store/ducks/buffet"
import { addProductToBag } from "../../store/ducks/shoppingBag"
import { addMessage } from "../../store/ducks/messages"

import BuffetItems from "../../components/BuffetItems"
import DishOverview from "../../components/DishOverview"

import { validatingDish } from "./helpers"

import { StyledDiv } from "./styles"

export default () => {
	const dispatch = useDispatch()

	const { buffetData, requiredItems, dish } = useSelector(state => state.buffet)
	const productsLength = useSelector(state => state.shoppingBag.products.length)

	const handleToggleItem = clickedItem => dispatch(toggleDishItem(clickedItem))

	const handleToggleExtraItem = clickedExtraItem =>
		dispatch(toggleExtraItem(clickedExtraItem))

	const handleClickAddDishToBag = () => {
		const { isValid, errorMessages } = validatingDish(
			dish.summaryItems,
			requiredItems
		)

		if (isValid) {
			dispatch(
				addProductToBag({
					dishItems: dish.summaryItems,
					dishPrice: dish.subtotal,
				})
			)
			dispatch(
				addMessage({
					type: "success",
					content: "Prato adicionado na sacola de compras!",
				})
			)
			dispatch(clearDish())
		} else {
			errorMessages.map(msg =>
				dispatch(addMessage({ type: "error", content: msg }))
			)
		}
	}

	return (
		<StyledDiv>
			<BuffetItems
				toggleItem={handleToggleItem}
				toggleExtraItem={handleToggleExtraItem}
				buffetData={buffetData}
				currentSelectedItems={dish.currentSelectedItems}
				requiredItems={requiredItems}
			/>

			<DishOverview
				dishSummary={dish.summaryItems}
				subtotal={dish.subtotal}
				handleClick={handleClickAddDishToBag}
				productsLength={productsLength}
			/>
		</StyledDiv>
	)
}
