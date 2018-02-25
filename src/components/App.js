import React, { Component } from "react"
import { connect } from "react-redux"
import { Route } from "react-router-dom"
import * as actions from "../actions"
import Header from "./Header"
import Home from "./Home"

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home} />
      </div>
    )
  }
}

export default connect(null, actions)(App)
