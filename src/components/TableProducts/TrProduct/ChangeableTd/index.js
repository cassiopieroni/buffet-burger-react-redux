import React from "react"
import { StyledDiv } from "./styles"
import decBtn from "../../../../assets/dec-30x30.png"
import addBtn from "../../../../assets/add-30x30.png"

const ChangeableTd = ({ product, changeProduct }) => (
	<td>
		<StyledDiv>
			<button onClick={() => changeProduct("decrease", product)}>
				<img src={decBtn} alt="diminuir" />
			</button>

			<span>{product.quantity}</span>

			<button onClick={() => changeProduct("increase", product)}>
				<img src={addBtn} alt="aumentar" />
			</button>
		</StyledDiv>

		<p onClick={() => changeProduct("delete", product)}>excluir</p>
	</td>
)

export default ChangeableTd
