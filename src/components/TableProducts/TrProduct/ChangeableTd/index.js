import React from "react"
import * as changeTypes from "../../../../store/ducks/shoppingBag/constants"
import { StyledDiv, StyledBtn } from "./styles"
import decBtn from "../../../../assets/dec-30x30.png"
import addBtn from "../../../../assets/add-30x30.png"

const ChangeableTd = ({ product, changeProduct }) => (
	<td>
		<StyledDiv>
			<StyledBtn
				onClick={() => changeProduct(changeTypes.decrease, product)}
				disabled={product.quantity <= 1}
			>
				<img src={decBtn} alt="diminuir" />
			</StyledBtn>

			<span>{product.quantity}</span>

			<StyledBtn onClick={() => changeProduct(changeTypes.increase, product)}>
				<img src={addBtn} alt="aumentar" />
			</StyledBtn>
		</StyledDiv>

		<p onClick={() => changeProduct(changeTypes.deletePr, product)}>excluir</p>
	</td>
)

export default ChangeableTd
