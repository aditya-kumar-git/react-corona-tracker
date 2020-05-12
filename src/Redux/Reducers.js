import { combineReducers } from "redux"

var storeCoronaData = (initialState = [], action) => {
	switch (action.type) {
		case "STORE_DATA": {
			return action.payload
		}
		default: {
			return initialState
		}
	}
}

var storeCountries = (initialState = [], action) => {
	switch (action.type) {
		case "STORE_COUNTRIES": {
			return action.payload
		}
		default: {
			return initialState
		}
	}
}

var storeOneCountry = (initialState = [], action) => {
	switch (action.type) {
		case "STORE_ONE_COUNTRY": {
			return action.payload
		}
		case "EMPTY_COUNTRY": {
			return action.payload
		}
		default: {
			return initialState
		}
	}
}

var moreInfoCountry = (initialState = [], action) => {
	switch (action.type) {
		case "MORE_COUNTRY_INFO": {
			return action.payload
		}

		default: {
			return initialState
		}
	}
}

var allReucers = combineReducers({
	storeCoronaData: storeCoronaData,
	storeCountries: storeCountries,
	storeOneCountry: storeOneCountry,
	moreInfoCountry: moreInfoCountry,
})

export default allReucers
