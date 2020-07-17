import React from "react"
import { NavLink } from "react-router-dom"
import DishItem from "./DishItem"
import NumToReal from "../NumToReal"
import Button from "../Button"
import { StyledSection, StyledP1, StyledP2 } from "./styles"

const DishOverview = ({ dishSummary, subtotal, handleClick, productsLength }) => (
	<StyledSection>
		<div>
			<h3>Descrição do prato</h3>

			{dishSummary && dishSummary.length ? (
				<>
					<ul>
						{dishSummary.map((item, i) => (
							<DishItem key={i} item={item} />
						))}
					</ul>

					<StyledP1>
						Total: <NumToReal num={subtotal} />
					</StyledP1>
				</>
			) : (
				<StyledP2>Selecione seus ingredientes!</StyledP2>
			)}

			<Button iconType="shoppingBag" clicked={handleClick}>
				adicionar
			</Button>

			<NavLink to="/shopping-bag">{`sacola de compras ( ${productsLength} )`}</NavLink>
		</div>
	</StyledSection>
)

export default DishOverview
