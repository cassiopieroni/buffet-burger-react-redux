import React from "react"
import { useSelector } from "react-redux"

import Layout from "./layout"
import Pages from "./pages"
import Messages from "./containers/Messages"

const App = () => {
	document.title = "Vintage Burger"
	const bagLength = useSelector(state => state.shoppingBag.products).length

	return (
		<Layout bagLength={bagLength}>
			<Pages />
			<Messages />
		</Layout>
	)
}

export default App
