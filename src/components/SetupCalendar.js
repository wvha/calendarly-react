import React, { Component } from 'react';

export default class SetupCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    
  }

  componentDidMount() {
    // call availability for next two weeks
  }

  render() {
    return (
      <div className="container">
        <p>Please set availability for the next two weeks.</p>


      </div>
    )
  }
}
