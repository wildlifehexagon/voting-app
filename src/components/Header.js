import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Toolbar, NavLink } from "rebass"

const StyledToolbar = Toolbar.extend`
  background-color: #96858f;
  color: #f4f4f4;
`

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return
      case false:
        return (
          <NavLink href="/auth/google" ml="auto">
            Login with Google
          </NavLink>
        )
      default:
        return (
          <NavLink href="/api/logout" ml="auto">
            Logout
          </NavLink>
        )
    }
  }

  render() {
    return (
      <StyledToolbar>
        <Link to={this.props.auth ? "/polls" : "/"}>Voting App</Link>
        {this.renderContent()}
      </StyledToolbar>
    )
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Header)
