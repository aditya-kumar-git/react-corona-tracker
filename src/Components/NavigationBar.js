import React from "react"
import { Link } from "react-router-dom"

class NavigationBar extends React.Component {
	render() {
		return (
			<div className="navigationBar">
				<div className="navigationBarContainer">
					<Link to="/">
						<div className="navOpts">Home</div>
					</Link>
					<Link to="/data">
						<div className="navOpts">Countries</div>
					</Link>
				</div>
			</div>
		)
	}
}
export default NavigationBar
