import React from "react"
import Item from "./Item"
import { StyledDivWrapper, StyledDivTitle } from "./styles"

const SelectionOfItems = props => {
	const { clickedOnItem, allItems, currentCheckedItem, title, isOptional } = props

	return (
		<StyledDivWrapper>
			<StyledDivTitle>
				<h3>{title}</h3>
				{isOptional && <span>(Opcional)</span>}
			</StyledDivTitle>

			<ul>
				{allItems.map(item => (
					<Item
						key={item.value}
						item={item}
						clickedOnItem={clickedOnItem}
						curCheckedItem={currentCheckedItem}
					/>
				))}
			</ul>
		</StyledDivWrapper>
	)
}

export default SelectionOfItems
