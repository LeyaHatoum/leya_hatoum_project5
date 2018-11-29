import React, { Component } from 'react';
import axios from 'axios';
import Characters from "./Characters";

//Here we get the all the dimensions in Rick and Morty's multiverse. There are 4 pages of results so that API needs to be called 4 times.

class Dimensions extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      residents: []
    };
  }

  componentDidMount() {

    console.log("Dimensions component mounted");
    axios({
      method: "GET",
      url: `https://rickandmortyapi.com/api/location/`,
      dataResponse: "json",
      params: {
        type: "Planet"
        // dimension: "Replacement dimension"
      }
    }).then(
      (response) => {
        const results = response.data.results
        const allTheResidents = results.map( planet => {
          return planet.residents
        })
        this.setState({
          results: results,
          residents: allTheResidents
        })
      }
    )
  }

  render() {
  
    console.log("all the residents", this.state.residents)
    const dimensions = this.state.results
    const dimensionButtons = dimensions.map((dimension) => {
      return (
      <div>
        <button>{dimension.name}</button>
        {/* <Characters residents={dimension.residents} /> */}
      </div>
      );
    })
  
    return (
      <div>
        {dimensionButtons}
      </div>
    );
  }
}

export default Dimensions;