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
    // save a reference to `this` because the value of `this` will change
    // inside the different callback functions.
    var base = this

    // fetch a componentDidMount
    let poemApi = 'http://ShakeItSpeare.com/api/poem';
    fetch(poemApi)
      .then((response) => {
        return response.json()
      }).then((json) => {
        base.setState({
          shakeSpeare: json.poem
        })
      }).catch((ex) => {
        console.log('An error occured while parsing.', ex)
      })
  }

  render() {
    let poetry = this.state.shakeSpeare;
    
    return (
      <div>
        <h1>My favourite Shakespeare poem:</h1>
        {poetry}
      </div>
    );
  }
}

export default App;
