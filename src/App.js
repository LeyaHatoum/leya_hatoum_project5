import React, { Component } from 'react';
import "./app.css";
import Dimensions from "./Dimensions";

class App extends Component {
  render() {
    console.log("I'm the render")
    return (
      <div className="App">
       <Dimensions />
      </div>
    );
  }
}

export default App;