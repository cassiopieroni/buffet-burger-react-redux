import React from "react"
import { useHistory } from "react-router-dom"
import { StyledDiv, StyledButton } from "./styles"
import burgerIcon from "../../assets/burger-50x50-white.png"

export default () => {
	const history = useHistory()

	return (
		<StyledDiv>
			<StyledButton onClick={() => history.push("/buffet")}>
				<img src={burgerIcon} alt="hamburger" />
				<p>Sirva-se aqui</p>
			</StyledButton>
		</StyledDiv>
	)
}
