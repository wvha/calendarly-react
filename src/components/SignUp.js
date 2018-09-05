import React, { Component } from 'react';

export default class Signup extends Component {
  render() {
    return (
      <div className="container">
        <p className="App-intro">
          To get started, please enter your email address
        </p>
        <form>
          <input className="input" placeholder="email address"></input>
        </form>
        <p>OR</p>
        <p><button className="button">Sign In</button></p>
      </div>
    )
  }
}




