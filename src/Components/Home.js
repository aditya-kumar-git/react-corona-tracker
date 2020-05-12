import React from "react"

import { connect } from "react-redux"
import DRC from "./DRCreuseable"

class Home extends React.Component {
	render() {
		return (
			<DRC
				deathsProp={this.props.storeCoronaData.deaths.value}
				confirmedProp={this.props.storeCoronaData.confirmed.value}
				recoveredProp={this.props.storeCoronaData.recovered.value}
			/>
		)
	}
}

var mapStateToProps = (state) => {
	return state
}
export default connect(mapStateToProps)(Home)
