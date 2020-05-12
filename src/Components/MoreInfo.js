import React from "react"
import { connect } from "react-redux"
import gsap from "gsap"

class MoreInfo extends React.Component {
	renderInfoBlocks = () => {
		return this.props.moreInfoCountry.map((x) => {
			return (
				<div key={x.uid} className="infoBlockData">
					<div className="infoBlockDataContainer">
						<div>{x.combinedKey}</div>
						<div className="IBDnumbers">
							<div className="ibdn death">{x.deaths}</div>
							<div className="ibdn confirmed">{x.confirmed}</div>
							<div className="ibdn">{x.recovered}</div>
						</div>
					</div>
				</div>
			)
		})
	}

	componentDidMount() {
		console.log(this.props.moreInfoCountry)
		gsap.to(".seeMoreBtn", { duration: 0.5, opacity: 0 })
		gsap.from(".infoBlockDataContainer", {
			duration: 0.5,
			opacity: 0,
			y: "20%",
			stagger: 0.2,
		})
	}
	render() {
		return <div className="infoBlock">{this.renderInfoBlocks()}</div>
	}
}
var mapStateToProps = (state) => {
	return state
}
export default connect(mapStateToProps)(MoreInfo)
