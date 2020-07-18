import React from "react"
import { StyledLi } from "./styles"
import NumToReal from "../../../NumToReal"

const Item = ({ item, clickedOnItem, curCheckedItem }) => {
	const isExtraItem = item.type === "extra"
	const isChecked = isExtraItem
		? curCheckedItem.some(extra => extra.value === item.value)
		: curCheckedItem.value === item.value

	return (
		<StyledLi isChecked={isChecked}>
			<label>
				<input
					type={isExtraItem ? "checkbox" : "radio"}
					value={item.value}
					defaultChecked={isChecked}
					onClick={() => clickedOnItem(item)}
				/>

				<p>{item.description}</p>
				{item.price && (
					<span>
						<NumToReal num={item.price} />
					</span>
				)}
			</label>
		</StyledLi>
	)
}

export default Item
