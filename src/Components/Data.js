import React from "react"
import { connect } from "react-redux"

import Loading from "./Loading"
import gsap from "gsap"
import { Link } from "react-router-dom"

class Data extends React.Component {
	componentDidMount() {
		var tl = gsap.timeline()
		tl.from(".singlecountryContainer", {
			duration: 0.8,
			opacity: 0,
			y: "-50%",
		})
	}

	renderLoading = () => {
		if (this.props.storeCountries[0]) {
			return (
				<div className="allCountries">
					{this.props.storeCountries.map((x) => {
						return (
							<div className="singlecountry" key={x.name}>
								<Link className="singlecountryContainer" to={`/data/${x.name}`}>
									<div>{x.name}</div>
								</Link>
							</div>
						)
					})}
				</div>
			)
		} else {
			return <Loading />
		}
	}

	render() {
		return <div>{this.renderLoading()}</div>
	}
}

var mapStateToProps = (state) => {
	return state
}
export default connect(mapStateToProps)(Data)
