import React, { Component } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <span>its live</span>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
