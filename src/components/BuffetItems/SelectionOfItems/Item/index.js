import React from "react"
import { StyledLi } from "./styles"
import NumToReal from "../../../NumToReal"

const Item = ({ item, changeItem, curCheckedItem, name }) => {
	const isChecked = curCheckedItem.value === item.value

	return (
		<StyledLi isChecked={isChecked}>
			<label>
				<input
					name={name}
					type="radio"
					value={item.value}
					checked={isChecked}
					onChange={changeItem}
					required
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
