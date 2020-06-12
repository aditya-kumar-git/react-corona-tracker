import { createStore, compose, applyMiddleware } from "redux"
import allReucers from "./Reducers"
import thunk from "redux-thunk"

var myStore = createStore(allReucers, compose(applyMiddleware(thunk)))

export default myStore
