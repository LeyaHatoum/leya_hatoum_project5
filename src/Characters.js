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

  componentDidMount() {
    const allResidents = this.props.residents.map(resident => {
      return (
        axios({
          method: "GET",
          url: resident,
          dataResponse: "json"
        }).then(
          (response) => {
            return response.data
          }
        )
      )
    })

    Promise.all([...allResidents]).then(values => {
      this.setState({
        characters: values
      });
    })
  }

  render() {
    console.log("Characters is working!")
    const doIShow = this.props.show
    const characters = this.state.characters

    const theResidents = characters.map( character => {
      if (doIShow === true){
        return (
          <p key={character.id}>{character.name}</p>
        )
      }
      return null;
    })
    
    return (
      <div key={this.props.planet}>
      {theResidents}
      </div>
    );
  }
}


export default Characters;