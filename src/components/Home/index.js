import React from "react"
import { useHistory } from "react-router-dom"
import { StyledDiv } from "./styles"

import Button from "../Button"

export default () => {
	const history = useHistory()

	return (
		<StyledDiv>
			<Button iconType="burger" clicked={() => history.push("/buffet")}>
				Sirva-se
			</Button>
		</StyledDiv>
	)
}
