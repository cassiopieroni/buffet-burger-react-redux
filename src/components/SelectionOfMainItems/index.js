import React from "react"
import { numToReal } from "../NumToReal/helpers"
import { StyledDiv, StyledSelect } from "./styles"

const SelectItem = ({ options, currentItemOnDish, keyName, changeItem }) => (
	<StyledSelect onChange={changeItem} value={currentItemOnDish.value} name={keyName}>
		{options.map(opt => (
			<option key={opt.value} value={opt.value}>
				{opt.price
					? `${opt.selectDescription} - ${numToReal(opt.price)} `
					: `${opt.selectDescription}`}
			</option>
		))}
	</StyledSelect>
)

const SelectionOfMainItems = ({ changeItem, mainItems, currentItemsOnDish }) => {
	const { allBreads, allBurgers, allCheeses } = mainItems
	const { bread, burger, cheese } = currentItemsOnDish

	return (
		<StyledDiv>
			<h3>Ingredientes: </h3>

			<div>
				<SelectItem
					options={allBreads}
					currentItemOnDish={bread}
					keyName={"allBreads"}
					changeItem={changeItem}
				/>

				<SelectItem
					options={allBurgers}
					currentItemOnDish={burger}
					keyName={"allBurgers"}
					changeItem={changeItem}
				/>

				<SelectItem
					options={allCheeses}
					currentItemOnDish={cheese}
					keyName={"allCheeses"}
					changeItem={changeItem}
				/>
			</div>
		</StyledDiv>
	)
}

export default SelectionOfMainItems
