import React, { Component } from 'react';
import "./app.css";
import Dimensions from "./Dimensions";
import dimensionNames from "./dimensionNames";
import Particles from "react-particles-js";

//Particle styling for the background
const particleOpt = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    line_linked: {
      enable: true,
      distance: 60,
      color: "#ffffff",
      opacity: 0.4,
      width: 2
    },
    move: {
      enable: true,
      speed: 1.4,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out"
    }
  }
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      dimensions: dimensionNames
    };
  }
  
  render() {
    //This maps throught the dimensions and changes the key of each dimension in the state
    const showDimension = event => {
      const dimensionClicked = event.target.value
      
      this.setState({
        dimensions: this.state.dimensions.map(dimension => {
          if (dimension.name === dimensionClicked) {
            return {
              ...dimension,
              clicked: !dimension.clicked
            }
          }
          return dimension;
        })
      })
      return
    };
    
    return (
      <div className="App">
        <Particles params={particleOpt} className="particles"/>
        <h1>Welcome to the Multiverse</h1>
        <p className="intro">The multiverse is a concept that refers to the existence of infinite universes that comprise everything that is. It contains an infinite amount of versions of every character in the Rick and Morty series. This site documents every dimension discovered by Rick and Morty during their adventures.</p>
        <p className="intro">Pick one to explore.</p>
        {
          this.state.dimensions.map((dimension) => {
            return (
              <div className={(dimension.clicked === true) ?"dimension" : "dimension--notClicked"} key={dimension.name}>
                <label htmlFor="dimension-name">{dimension.name}</label>
                <input id="dimension-name" className="dimension-input" type="submit" value={dimension.name} onClick={(event) => { showDimension(event) }} /> 
                <Dimensions
                  dimensionName={dimension.name}
                  amIClicked={dimension.clicked}
                />
              </div>
            )
          })
        }
        <footer>
          <p>Made by Leya Hatoum using the Rick and Morty API by <a href="https://axelfuhrmann.com/">Axel Fuhrmann.</a></p>
        </footer>
      </div>
    );
  }
}

export default App;