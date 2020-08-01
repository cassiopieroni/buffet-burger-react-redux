import React from "react"

import { StyledDiv, StyledDivWrapper } from "./styles"

const Spinner = () => (
	<StyledDivWrapper data-testid="spinner">
		<StyledDiv>
			<div></div>
			<div></div>
			<div></div>
		</StyledDiv>
	</StyledDivWrapper>
)

export default Spinner
