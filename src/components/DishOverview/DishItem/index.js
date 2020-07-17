import React from "react"
import NumToReal from "../../NumToReal"
import { StyledLi } from "./styles"

const DishItem = ({ item }) => (
	<StyledLi>
		<p>{item.overviewDescription || item.description}</p>
		<span>
			<NumToReal num={item.price} />
		</span>
	</StyledLi>
)

export default DishItem
