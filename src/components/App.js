import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    )
  }
}

export default App
