import React, { Component } from 'react'
import BobaFett from '../assets/img/boba-fett.png'
import { NavLink } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink to='/' exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/new-questions' exact>
              New Questions
            </NavLink>
          </li>
          <li>
            <NavLink to='/leader-board' exact>
              Leader Board
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}
