import React from "react"
import ReactDOM from "react-dom"
import App from "./containers/App"
import GlobalStyles from "./styles/GlobalStyles"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<GlobalStyles />
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
)
