import React from "react"
import Header from "./Header"
import Content from "./Content"
import Footer from "./Footer"

export default ({ children, bagLength }) => (
	<>
		<Header bagLength={bagLength} />

		<Content>{children}</Content>

		<Footer />
	</>
)
