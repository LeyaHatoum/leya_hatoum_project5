import React, { Component } from 'react';
import axios from 'axios';
import Characters from "./Characters";

class Dimensions extends Component {
  constructor() {
    super();
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    console.log("I mounted");
    axios({
      method: "GET",
      url: `https://rickandmortyapi.com/api/location/`,
      dataResponse: "json"
    }).then(
      (response) => {
        const results = response.data.results
        this.setState({
          results: results,
        })
      }
    )
  }

  render() {
    const dimensions = this.state.results
    const dimensionButtons = dimensions.map((dimension) => {
      return (
      <div>
        <button>{dimension.name}</button>
        <Characters residents={dimension.residents} />
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