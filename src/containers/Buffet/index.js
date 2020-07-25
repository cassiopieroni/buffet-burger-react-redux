import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"

import { toggleDishItem, toggleExtraItem, clearDish } from "../../store/ducks/dish"
import { addProductToBag } from "../../store/ducks/shoppingBag"
import { addMessage } from "../../store/ducks/messages"

import BuffetItems from "../../components/BuffetItems"
import DishOverview from "../../components/DishOverview"

import { validatingDish } from "./helpers"

import { StyledDiv } from "./styles"

export default () => {
	const dispatch = useDispatch()

	const { buffetData, requiredItems } = useSelector(state => state.initialData)
	const { summaryItems, subtotal, selectedItems } = useSelector(state => state.dish)
	const productsLength = useSelector(state => state.shoppingBag.products.length)

	const handleToggleItem = useCallback(
		clickedItem => dispatch(toggleDishItem(clickedItem)),
		[dispatch]
	)

	const handleToggleExtraItem = useCallback(
		clickedExtraItem => dispatch(toggleExtraItem(clickedExtraItem)),
		[dispatch]
	)

	const handleClickAddDishToBag = useCallback(() => {
		const { isValid, errorMessages } = validatingDish(summaryItems, requiredItems)

		if (isValid) {
			dispatch(
				addProductToBag({
					dishItems: summaryItems,
					dishPrice: subtotal,
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
	}, [summaryItems, subtotal, requiredItems, dispatch])

	return (
		<StyledDiv>
			<BuffetItems
				toggleItem={handleToggleItem}
				toggleExtraItem={handleToggleExtraItem}
				buffetData={buffetData}
				selectedItems={selectedItems}
				requiredItems={requiredItems}
			/>

			<DishOverview
				dishSummary={summaryItems}
				subtotal={subtotal}
				handleClick={handleClickAddDishToBag}
				productsLength={productsLength}
			/>
		</StyledDiv>
	)
}
