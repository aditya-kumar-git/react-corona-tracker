import React from "react"
import { connect } from "react-redux"
import {
	getSpecificCountry,
	emptySpecificCountry,
	moreInfoOnCountries,
} from "../Redux/Actions"
import Loading from "./Loading"
import DRC from "./DRCreuseable"
import gsap from "gsap"
import MoreInfo from "./MoreInfo"
var loadOrNot = 0

class SpecificCountry extends React.Component {
	renderMoreInfo = () => {
		if (loadOrNot === 1) {
			if (this.props.moreInfoCountry[1]) {
				return <MoreInfo />
			} else {
				return (
					<div className="cantRender">
						<div className="cantRenderContainer">
							<div className="bigX">X</div>
							<div>
								No more information available about{" "}
								{this.props.match.params.name}
							</div>
						</div>
					</div>
				)
			}
		} else {
			return <div></div>
		}
	}

	renderLoading = () => {
		if (this.props.storeOneCountry.data) {
			return (
				<div className="oneCountry">
					<DRC
						nameProp={this.props.match.params.name}
						deathsProp={this.props.storeOneCountry.data.deaths.value}
						confirmedProp={this.props.storeOneCountry.data.confirmed.value}
						recoveredProp={this.props.storeOneCountry.data.recovered.value}
					/>

					<button
						className="seeMoreBtn "
						onClick={() => {
							loadOrNot = 1
							this.props.moreInfoOnCountries(this.props.match.params.name)
						}}
					>
						Show More
					</button>
					<div className="moreInfo">{this.renderMoreInfo()}</div>
				</div>
			)
		} else {
			return <Loading />
		}
	}

	componentDidMount() {
		this.props.getSpecificCountry(this.props.match.params.name)
		console.log(this.props)
	}
	componentDidUpdate(preProp) {
		if (preProp.storeOneCountry !== this.props.storeOneCountry) {
			gsap.from(".seeMoreBtn", {
				duration: 0.8,
				y: "-50%",
				opacity: 0,
				delay: 1.8,
			})
		}
	}

	componentWillUnmount() {
		this.props.emptySpecificCountry()
		loadOrNot = 0
	}

	render() {
		return <div>{this.renderLoading()}</div>
	}
}

var mapStateToProps = (state) => {
	return state
}

export default connect(mapStateToProps, {
	getSpecificCountry: getSpecificCountry,
	emptySpecificCountry: emptySpecificCountry,
	moreInfoOnCountries: moreInfoOnCountries,
})(SpecificCountry)
