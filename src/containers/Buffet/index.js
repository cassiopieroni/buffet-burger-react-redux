import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeDishItem, toggleDishExtraItem, clearDish } from "../../store/ducks/buffet"
import { addProductToBag } from "../../store/ducks/shoppingBag"
import { addMessage } from "../../store/ducks/messages"
import BuffetItems from "../../components/BuffetItems"
import DishOverview from "../../components/DishOverview"
import { validatingDish } from "./helpers"
import { StyledDiv } from "./styles"

export default () => {
	const dispatch = useDispatch()

	const { buffetData, dish } = useSelector(state => state.buffet)
	const productsLength = useSelector(state => state.shoppingBag.products.length)

	const handleChangeItem = e => {
		const { value, name } = e.target
		dispatch(changeDishItem({ value, name }))
	}

	const handleToggleExtraItem = extraItem => dispatch(toggleDishExtraItem(extraItem))

	const handleClickAddDishToBag = () => {
		const { isValid, errorMessages } = validatingDish(dish.summaryItems)

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
		} else
			errorMessages.forEach(msg =>
				dispatch(addMessage({ type: "error", content: msg }))
			)
	}

	return (
		<StyledDiv>
			<BuffetItems
				changeItem={handleChangeItem}
				toggleExtraItem={handleToggleExtraItem}
				buffetData={buffetData}
				currentSelectedItems={dish.currentSelectedItems}
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
