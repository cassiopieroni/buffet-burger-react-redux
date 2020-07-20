import React from "react"

import TrProduct from "./TrProduct"
import NumToReal from "../NumToReal"

import { StyledTable, StyledTh } from "./styles"

const TableProducts = ({ products, bagPrice, changeProduct }) => (
	<StyledTable>
		<thead>
			<tr>
				<StyledTh width={50}>Descrição</StyledTh>
				<StyledTh width={20}>Qtd</StyledTh>
				<StyledTh width={15}>Valor unitário</StyledTh>
				<StyledTh width={15}>Valor total</StyledTh>
			</tr>
		</thead>

		<tbody>
			{products.map(product => (
				<TrProduct
					key={product.id}
					product={product}
					changeProduct={changeProduct}
				/>
			))}
		</tbody>

		{bagPrice && (
			<tfoot>
				<tr>
					<th colSpan={3}>total em produtos</th>
					<td>
						<NumToReal num={bagPrice} />
					</td>
				</tr>
			</tfoot>
		)}
	</StyledTable>
)

export default TableProducts
