import React, { Component } from 'react';
import logo from '../cal.png';


export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navbar">
        <div className="header">
          <a className="logo" href="/"><img src={logo} width="35" height="35"></img></a>
          <ul className="links">
            <li>Hello</li>
          </ul>
        </div>
      </div>
    )
  }
}