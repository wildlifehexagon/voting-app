import React, { Component } from "react"
import { Toolbar, NavLink } from "rebass"
import styled from "styled-components"

const StyledToolbar = Toolbar.extend`
  background-color: #96858f;
  color: #f4f4f4;
`

export default class Header extends Component {
  render() {
    return (
      <StyledToolbar>
        <NavLink>Voting App</NavLink>
        <NavLink ml="auto">Login</NavLink>
      </StyledToolbar>
    )
  }
}
