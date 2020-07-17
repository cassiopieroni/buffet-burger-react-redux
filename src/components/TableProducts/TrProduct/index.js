import React from "react"
import ChangeableTd from "./ChangeableTd"
import NumToReal from "../../NumToReal"
import { StyledTr } from "./styles"

const TrProduct = ({ product, changeProduct }) => (
	<StyledTr>
		<td>{product.overviewDescription || product.description}</td>

		{changeProduct ? (
			<ChangeableTd product={product} changeProduct={changeProduct} />
		) : (
			<td>{product.quantity}</td>
		)}

		<td>
			<NumToReal num={product.unitPrice} />
		</td>

		<td>
			<NumToReal num={product.subtotal} />
		</td>
	</StyledTr>
)

export default TrProduct
