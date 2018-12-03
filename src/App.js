import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main.js';

class App extends Component {
    constructor(props){
      this.state = {
        username: 'Coolboy55',
        password: 'BusinessWolf'
      }
    }
  
  
  
  render() {
    return (
      <div className="App">
        
        Hi

        <Example theUsername = {this.state.username} thePassword= {this.state.password} />

      </div>
    );
  }
}

export default App;