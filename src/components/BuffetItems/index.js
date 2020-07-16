import React from "react"

import SelectionOfMainItems from "../SelectionOfMainItems"
import SelectionOfExtraItems from "../SelectionOfExtraItems"
import SelectionOfMeatSpot from "../SelectionOfMeatSpot"

import { StyledSection } from "./styles"

const BuffetItems = props => {
	const { changeItem, toggleExtraItem, buffetData, currentSelectedItems } = props
	const { allBreads, allBurgers, allCheeses, allExtras, allMeatSpots } = buffetData
	const { bread, burger, cheese, extras, meatSpot } = currentSelectedItems

	return (
		<StyledSection>
			<SelectionOfMainItems
				changeItem={changeItem}
				mainItems={{
					allBreads,
					allBurgers,
					allCheeses,
				}}
				currentItemsOnDish={{
					bread,
					burger,
					cheese,
				}}
			/>

			<SelectionOfMeatSpot
				changeItem={changeItem}
				allMeatSpots={allMeatSpots}
				currentCheckedMeatSpot={meatSpot}
			/>

			<SelectionOfExtraItems
				toggleExtraItem={toggleExtraItem}
				allExtras={allExtras}
				currentItemsOnDish={extras}
			/>
		</StyledSection>
	)
}

export default BuffetItems
