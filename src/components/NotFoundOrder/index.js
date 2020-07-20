import React from "react"
import { NavLink } from "react-router-dom"

import { StyledSection, StyledDiv } from "./styles"

const NotFoundOrder = () => (
	<StyledSection>
		<h2>Detalhes do pedido:</h2>
		<StyledDiv>
			<br />
			<p>Você ainda não possui pedidos confirmados!</p>
			<p>
				Verifique seus dados de entrega{" "}
				<NavLink to="/delivery">clicando aqui.</NavLink>
			</p>
		</StyledDiv>
	</StyledSection>
)

export default NotFoundOrder
