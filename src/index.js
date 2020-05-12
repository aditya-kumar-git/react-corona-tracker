import React from "react"
import ReactDOM from "react-dom"
import App from "./Components/App"
import myStore from "./Redux/Store"
import { Provider } from "react-redux"

ReactDOM.render(
	<Provider store={myStore}>
		<App />
	</Provider>,
	document.querySelector(`#root`)
)
