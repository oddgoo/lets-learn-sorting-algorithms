import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BubbleSort from './Pages/BubbleSort/index.js';
import Introduction from './Pages/Introduction/index.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
         
          <h2>Ordenamiento de Datos</h2>
        </div>
        <p className="App-intro">
          <code>src/App.js</code>
          <Introduction/>
          <BubbleSort/>
        </p>
      </div>
    );
  }
}

export default App;
