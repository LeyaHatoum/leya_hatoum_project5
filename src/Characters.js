import React, { Component } from 'react';
import axios from 'axios';

//This component calls the Character resource of the API because the Location resource only provides us with the Character urls of each resident. As a result, the url for each resident is taken from the Location resource, placed in the Character's axios, and the call is made, each time, to retrieve their data.

class Characters extends Component {
  constructor() {
    super();
    this.state = {
      characters: []
    };
  }

  componentDidMount(residents) {
    const residentsOfThisDimension = [];
    residents.map(resident => {
      return (
        axios({
          method: "GET",
          url: resident,
          dataResponse: "json"
        }).then(
          (response) => {
           residentsOfThisDimension.push(response)
          }
        )
      )
    })
    this.setState({
      characters: residentsOfThisDimension,
    })
  }
  

  render() {
    return (
      <p>I'm a Character</p>
    );
  }
}


export default Characters;