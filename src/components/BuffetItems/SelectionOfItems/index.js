import React from "react"
import Item from "./Item"
import ExtraItem from "./ExtraItem"
import { StyledDivWrapper, StyledDivTitle } from "./styles"

const SelectionOfItems = props => {
	const { changeItem, allItems, currentCheckedItem, title, isOptional, keyName } = props

	const items =
		keyName === "allExtras"
			? allItems.map(item => (
					<ExtraItem
						key={item.value}
						item={item}
						toggleExtraItem={changeItem}
						currentItemsOnDish={currentCheckedItem}
					/>
			  ))
			: allItems.map(item => (
					<Item
						key={item.value}
						item={item}
						changeItem={changeItem}
						curCheckedItem={currentCheckedItem}
						name={keyName}
					/>
			  ))

	return (
		<StyledDivWrapper>
			<StyledDivTitle>
				<h3>{title}</h3>
				{isOptional && <span>(Opcional)</span>}
			</StyledDivTitle>

			<ul>{items}</ul>
		</StyledDivWrapper>
	)
}

export default SelectionOfItems
