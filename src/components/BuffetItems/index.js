import React from "react"

import SelectionOfItems from "./SelectionOfItems"

import { StyledSection } from "./styles"

const BuffetItems = props => {
	const { changeItem, toggleExtraItem, buffetData, currentSelectedItems } = props
	const { allBreads, allBurgers, allCheeses, allExtras, allMeatSpots } = buffetData
	const { bread, burger, cheese, extras, meatSpot } = currentSelectedItems

	return (
		<StyledSection>
			<h2>Selecione seus itens:</h2>

			<SelectionOfItems
				title={"Pão"}
				keyName={"allBreads"}
				changeItem={changeItem}
				allItems={allBreads}
				currentCheckedItem={bread}
			/>

			<SelectionOfItems
				title={"Hamburguer"}
				keyName={"allBurgers"}
				changeItem={changeItem}
				allItems={allBurgers}
				currentCheckedItem={burger}
			/>

			<SelectionOfItems
				title={"Ponto do Hamburger"}
				keyName={"allMeatSpots"}
				changeItem={changeItem}
				allItems={allMeatSpots}
				currentCheckedItem={meatSpot}
			/>

			<SelectionOfItems
				title={"Queijo"}
				keyName={"allCheeses"}
				changeItem={changeItem}
				allItems={allCheeses}
				currentCheckedItem={cheese}
				isOptional
			/>

			<SelectionOfItems
				title={"Adicione"}
				keyName={"allExtras"}
				changeItem={toggleExtraItem}
				allItems={allExtras}
				currentCheckedItem={extras}
				isOptional
			/>
		</StyledSection>
	)
}

export default BuffetItems
