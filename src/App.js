import React, { Component } from 'react';
import "./app.css";
import Dimensions from "./Dimensions";
import dimensionNames from "./dimensionNames";
import Particles from "react-particles-js";

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
    
    const showDimension = event => {
      console.log(event.target.value, ": I was clicked")
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
        <p className="intro">Pick a dimension to explore.</p>
        {
          this.state.dimensions.map((dimension) => {
            return (
              <div className="dimension" key={dimension.name}>
                <input className="dimension-input" type="submit" value={dimension.name} onClick={(event) => { showDimension(event) }} />
                <Dimensions
                  dimensionName={dimension.name}
                  amIClicked={dimension.clicked}
                />
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;