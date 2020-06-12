import React from "react"
import "../CSS/Corona.css"
import { getCoronaData, getCountryList } from "../Redux/Actions"
import NavigationBar from "./NavigationBar"
import { connect } from "react-redux"

import Home from "./Home"
import Data from "./Data"
import Loading from "./Loading"
import SpecificCountry from "./SpecificCountry"
import { BrowserRouter, Route } from "react-router-dom"

class App extends React.Component {
  renderLoading = () => {
    if (this.props.storeCoronaData.lastUpdate) {
      return (
        <div>
          <Route path="/" component={Home} exact />
          <Route component={Data} path="/data" exact />
          <Route component={SpecificCountry} path="/data/:name" />
        </div>
      )
    } else {
      return <Loading />
    }
  }

  componentDidMount() {
    this.props.getCoronaData()
    this.props.getCountryList()
  }
  render() {
    return (
      <BrowserRouter>
        <NavigationBar />
        {this.renderLoading()}
      </BrowserRouter>
    )
  }
}
var mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps, {
  getCoronaData: getCoronaData,
  getCountryList: getCountryList,
})(App)
