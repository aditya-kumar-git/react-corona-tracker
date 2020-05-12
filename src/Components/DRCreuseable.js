import React from "react"
import gsap from "gsap"
class DRC extends React.Component {
	componentDidMount() {
		var tl = gsap.timeline()
		tl.from(".Home", { duration: 0.5, opacity: 0 })
		tl.from(".circle", {
			duration: 0.3,
			opacity: 0,
			height: 0,
			width: 0,
			stagger: 0.2,
		})
		tl.from(".valuesData", {
			duration: 0.3,
			opacity: 0,
			height: 0,
			width: 0,
			stagger: 0.2,
		})
	}

	render() {
		return (
			<div className="Home  ">
				<div className="HomeContainer  ">
					<div className="homeCountryName">{this.props.nameProp}</div>
					<div className="HomeContainerData">
						<div className="values  ">
							<div className="circle death">{this.props.deathsProp}</div>
							<div className="valuesData">deaths</div>
						</div>
						<div className="values ">
							<div className="circle confirmed">{this.props.confirmedProp}</div>
							<div className="valuesData">confirmed</div>
						</div>
						<div className="values recovered">
							<div className="circle">{this.props.recoveredProp}</div>
							<div className="valuesData">recovered</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default DRC
