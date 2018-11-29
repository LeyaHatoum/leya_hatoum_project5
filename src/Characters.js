import React, { Component } from 'react';
import axios from 'axios';

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