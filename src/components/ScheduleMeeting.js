import React, { Component } from 'react';
import moment from 'moment';

export default class ScheduleMeeting extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    const today = new Date();
    
  }

  componentDidMount() {

  }


  render() {
    return (
      <div className="container">
        <p><strong>username</strong></p>
        <p>Schedule a meeting with USERNAME by adding an event to my calendar.</p>
        <p>Today is { moment().format('dddd') }</p>
        <div className="calendar">
          
        </div>
      </div>
    )
  }
}