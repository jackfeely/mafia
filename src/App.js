import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.handleHost = this.handleHost.bind(this);
    this.handleJoin = this.handleJoin.bind(this);
  }

  handleHost(){
    var num = Math.floor(Math.random() * 100) + 1
    alert("You have choosen to host ID is: " + num)
  }

  handleJoin(){
    alert("You have choosen to join")
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Mafia</h2>
        </div>

        <div className="Join-Host">
          <button onClick={this.handleHost}>Host</button>
          <button onClick={this.handleJoin}>Join</button>
        </div>

      </div>
    );
  }
}

export default App;
