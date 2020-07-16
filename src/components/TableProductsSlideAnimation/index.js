import React, { useState, useEffect } from "react"

import TableProducts from "../TableProducts"
import NumToReal from "../NumToReal"

import { StyledDiv, StyledDivControlTable, StyledDivSlide } from "./styles"

import iconToDown from "../../assets/toDown-20x20.png"
import iconToUp from "../../assets/toUp-20x20.png"

const TableProductsSlideAnimation = ({ products, bagPrice }) => {
	const [isShowingProductsTable, setIsShowingProductsTable] = useState(false)
	const [isStartSlideOut, setIsStartSlideOut] = useState(false)

	useEffect(() => {
		if (isStartSlideOut) {
			setTimeout(() => {
				setIsStartSlideOut(false)
				setIsShowingProductsTable(false)
			}, 500)
		}
	}, [isStartSlideOut])

	const handleClickToToggleShowTable = () =>
		isShowingProductsTable
			? setIsStartSlideOut(true)
			: setIsShowingProductsTable(true)

	return (
		<StyledDiv>
			{isShowingProductsTable && (
				<StyledDivSlide isStartSlideOut={isStartSlideOut}>
					<TableProducts products={products} />
				</StyledDivSlide>
			)}

			<div>
				<StyledDivControlTable
					onClick={handleClickToToggleShowTable}
					arrowToUp={isShowingProductsTable}
				>
					{isShowingProductsTable ? (
						<>
							<p>fechar tabela de produtos</p>
							<img src={iconToUp} alt="seta para cima" />
						</>
					) : (
						<>
							<p>exibir tabela de produtos</p>
							<img src={iconToDown} alt="seta para baixo" />
						</>
					)}
				</StyledDivControlTable>

				<p>
					Total em produtos:{" "}
					<span>
						{" "}
						<NumToReal num={bagPrice} />{" "}
					</span>
				</p>
			</div>
		</StyledDiv>
	)
}

export default TableProductsSlideAnimation
