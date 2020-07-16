import React from "react"
import { NavLink } from "react-router-dom"
import { StyledDiv, StyledButton } from "./styles"
import burgerIcon from "../../assets/burger-50x50-white.png"

export default () => (
	<StyledDiv>
		<NavLink to="/buffet">
			<StyledButton>
				<img src={burgerIcon} />
				<p>Sirva-se aqui</p>
			</StyledButton>
		</NavLink>
	</StyledDiv>
)
