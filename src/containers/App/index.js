import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchBuffetData } from "../../store/fetchActions/fetchBuffetData"
import { fetchRequiredItems } from "../../store/fetchActions/fetchRequiredItems"

import Layout from "../../layout"
import Pages from "../../pages"
import Messages from "../Messages"

const App = () => {
	const dispatch = useDispatch()
	const bagLength = useSelector(state => state.shoppingBag.products).length

	useEffect(() => {
		// simulando uma busca de dados
		dispatch(fetchBuffetData())
		dispatch(fetchRequiredItems())
	}, [dispatch])

	return (
		<Layout bagLength={bagLength}>
			<Pages />
			<Messages />
		</Layout>
	)
}

export default App
