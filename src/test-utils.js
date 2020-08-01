import React from "react"
import { render as rtlRender } from "@testing-library/react"
import { Provider } from "react-redux"
import { configureStore } from "@reduxjs/toolkit"

function render(
	ui,
	{
		reducers,
		initialState,
		store = configureStore({
			reducer: reducers,
			preloadedState: initialState,
		}),
		...renderOptions
	} = {}
) {
	function Wrapper({ children }) {
		return <Provider store={store}>{children}</Provider>
	}
	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from "@testing-library/react"

// override render method
export { render }
