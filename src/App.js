import React, { Component } from 'react';
import "./app.css";
import Dimensions from "./Dimensions";
import dimensionNames from "./dimensionNames";

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
        {
          this.state.dimensions.map((dimension) => {
            return (
              <div>
                <input type="submit" value={dimension.name} key={dimension.name} onClick={(event) => { showDimension(event) }} />
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