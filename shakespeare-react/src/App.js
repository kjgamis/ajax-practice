import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shakeSpeare: ""
    }
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <h1>My favourite Shakespeare poem:</h1>
      </div>
    );
  }
}

export default App;
