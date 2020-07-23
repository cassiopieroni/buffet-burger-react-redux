import React from "react"
import * as changeTypes from "../../../../store/ducks/shoppingBag/constants"
import { StyledTd, StyledBtn } from "./styles"
import decBtn from "../../../../assets/sub-30x30.png"
import addBtn from "../../../../assets/add-30x30.png"

const ChangeableTd = ({ product, changeProduct }) => (
	<StyledTd>
		<div>
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
		</div>

		<p onClick={() => changeProduct(changeTypes.deletePr, product)}>excluir</p>
	</StyledTd>
)

export default ChangeableTd
