import React from "react"
import Header from "./Header"
import Footer from "./Footer"

import { StyledDiv } from "./styles"

export default ({ children, bagLength }) => (
	<StyledDiv>
		<Header bagLength={bagLength} />
		<main>{children}</main>
		<Footer />
	</StyledDiv>
)
