import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom"
import { createStore, applyMiddleware, compose } from "redux"
import reduxThunk from "redux-thunk"
import reducers from "./reducers"
import "./styles"
import App from "./components/App"
import registerServiceWorker from "./registerServiceWorker"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  {},
  composeEnhancers(applyMiddleware(reduxThunk))
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
