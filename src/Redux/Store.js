import { createStore, compose, applyMiddleware } from "redux"
import allReucers from "./Reducers"
import thunk from "redux-thunk"

var myStore = createStore(
	allReucers,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
)

export default myStore
