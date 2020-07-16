import React from "react"
import { StyledDiv } from "./styles"

const MeatSpotOption = ({ meatSpot, changeItem, curCheckedMeatSpot }) => (
	<label key={meatSpot.value}>
		<input
			name={"allMeatSpots"}
			type="radio"
			value={meatSpot.value}
			checked={curCheckedMeatSpot.value === meatSpot.value}
			onChange={changeItem}
			required
		/>

		{meatSpot.description}
	</label>
)

const SelectionOfMeatSpot = ({ changeItem, allMeatSpots, currentCheckedMeatSpot }) => (
	<StyledDiv>
		<h3>*ponto:</h3>

		<div>
			{allMeatSpots.map(meatSpot => (
				<MeatSpotOption
					key={meatSpot.value}
					meatSpot={meatSpot}
					changeItem={changeItem}
					curCheckedMeatSpot={currentCheckedMeatSpot}
				/>
			))}
		</div>
	</StyledDiv>
)

export default SelectionOfMeatSpot
