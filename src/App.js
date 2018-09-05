import React, { Component } from 'react';
import logo from './cal.png';
import './App.css';
import Signup from './components/SignUp';
import Navbar from './components/Navbar';
import SetupCalendar from './components/SetupCalendar';
import ScheduleMeeting from './components/ScheduleMeeting';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Calendarly!!!</h1>
        </header>

        {/* <Signup /> */}
        <SetupCalendar />
        <ScheduleMeeting />
      </div>
    );
  }
}

export default App;
