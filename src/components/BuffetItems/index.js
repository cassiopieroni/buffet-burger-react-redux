import React from "react"
import SelectionOfItems from "./SelectionOfItems"
import { StyledSection } from "./styles"

const BuffetItems = props => {
	const {
		toggleItem,
		toggleExtraItem,
		buffetData,
		selectedItems,
		requiredItems,
	} = props

	if (!buffetData || !buffetData.allBreads) {
		return null
	}

	const { allBreads, allBurgers, allCheeses, allExtras, allMeatSpots } = buffetData
	const { bread, burger, cheese, extras, meatSpot } = selectedItems

	return (
		<StyledSection>
			<h2>Selecione os ingredientes:</h2>

			<SelectionOfItems
				title={"Pão"}
				clickedOnItem={toggleItem}
				allItems={allBreads}
				currentCheckedItem={bread}
				isOptional={!requiredItems.some(item => item.type === allBreads[0].type)}
			/>

			<SelectionOfItems
				title={"Hamburger"}
				clickedOnItem={toggleItem}
				allItems={allBurgers}
				currentCheckedItem={burger}
				isOptional={!requiredItems.some(item => item.type === allBurgers[0].type)}
			/>

			<SelectionOfItems
				title={"Ponto do hamburguer"}
				clickedOnItem={toggleItem}
				allItems={allMeatSpots}
				currentCheckedItem={meatSpot}
				isOptional={
					!requiredItems.some(item => item.type === allMeatSpots[0].type)
				}
			/>

			<SelectionOfItems
				title={"Queijo"}
				clickedOnItem={toggleItem}
				allItems={allCheeses}
				currentCheckedItem={cheese}
				isOptional={!requiredItems.some(item => item.type === allCheeses[0].type)}
			/>

			<SelectionOfItems
				title={"Adicione"}
				clickedOnItem={toggleExtraItem}
				allItems={allExtras}
				currentCheckedItem={extras}
				isOptional={!requiredItems.some(item => item.type === allExtras[0].type)}
			/>
		</StyledSection>
	)
}

export default BuffetItems
