import Axios from "axios"

export var getCoronaData = () => {
	return async (dispatch) => {
		var output = await Axios({
			url: "https://covid19.mathdro.id/api",
		})

		dispatch({
			type: "STORE_DATA",
			payload: output.data,
		})
	}
}

export var getCountryList = () => {
	return async (dispatch) => {
		var output = await Axios({
			url: "https://covid19.mathdro.id/api/countries",
		})

		dispatch({
			type: "STORE_COUNTRIES",
			payload: output.data.countries,
		})
	}
}

export var getSpecificCountry = (country) => {
	return async (dispatch) => {
		var output = await Axios({
			url: `https://covid19.mathdro.id/api/countries/${country}`,
		})

		dispatch({
			type: "STORE_ONE_COUNTRY",
			payload: output,
		})
	}
}

export var moreInfoOnCountries = (country) => {
	return async (dispatch) => {
		var output = await Axios({
			url: `https://covid19.mathdro.id/api/countries/${country}/confirmed`,
		})

		dispatch({
			type: "MORE_COUNTRY_INFO",
			payload: output.data.slice(0, 50),
		})
	}
}

export var emptySpecificCountry = () => {
	return {
		type: "EMPTY_COUNTRY",
		payload: [],
	}
}
