import React from "react"
import { StyledLi } from "./styles"
import NumToReal from "../../../NumToReal"

const ExtraItem = ({ item, toggleExtraItem, currentItemsOnDish }) => {
	const isChecked = currentItemsOnDish.some(extra => extra.value === item.value)

	return (
		<StyledLi isChecked={isChecked}>
			<label>
				<input
					type="checkbox"
					value={item.value}
					onChange={() => toggleExtraItem(item)}
					checked={isChecked}
				/>
				<p>{item.description}</p>
				<span>
					<NumToReal num={item.price} />
				</span>
			</label>
		</StyledLi>
	)
}

export default ExtraItem
