import React from "react"
import { NavLink } from "react-router-dom"
import NumToReal from "../NumToReal"
import { StyledSection, StyledP1, StyledP2, StyledButton } from "./styles"
import cartIcon from "../../assets/bag-50x50.png"

const DishItem = ({ item }) => (
	<li>
		<p>{item.description}</p>
		<span>
			<NumToReal num={item.price} />
		</span>
	</li>
)

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
						Total:{" "}
						<span>
							<NumToReal num={subtotal} />
						</span>
					</StyledP1>
				</>
			) : (
				<StyledP2>Selecione seus ingredientes!</StyledP2>
			)}

			<StyledButton onClick={handleClick}>
				<img src={cartIcon} alt="carrinho" />
				<p>adicionar</p>
			</StyledButton>

			<NavLink to="/shopping-bag">sacola de compras ( {productsLength} )</NavLink>
		</div>
	</StyledSection>
)

export default DishOverview
