import React, { Component } from 'react';
import axios from 'axios';
import Characters from "./Characters";

//Here we get the all the dimensions in Rick and Morty's multiverse. There are 4 pages of results so that API needs to be called 4 times.

class Dimensions extends Component {
  constructor() {
    super();
    this.state = {
      buttons: []
    };
  }

  componentDidMount() {
    const dimensionURLFormat = this.props.dimensionName.split(' ').join('+');

    axios({
      method: "GET",
      url: `https://rickandmortyapi.com/api/location/?dimension=${dimensionURLFormat}`,
      dataResponse: "json",
      // params: {
      //   // type: "Microverse"
      //   dimension: {theDimension}
      // }
    }).then(
      (response) => {
        const results = response.data.results
        const array = results.map(result => {
          return ({
            name: result.name,
            residents: result.residents,
            showList: false
          })
        })
        this.setState({
          buttons: array
        });
      }
    )
  }
  
  
  render() {

    //Create buttons out of all the objects (dimensions) in order to make them clickable and reveal the characters in them.
    const buttons = this.state.buttons
    const amIClicked = this.props.amIClicked
    //The onClick event will have to take a function that finds the button object that was clicked on and change its corresponding showList key's value 
    const dimensionButtons = buttons.map( button => {
      if (button.residents.length > 0 && amIClicked === true){
        return (
          <div key={button.name} className="planet" >
            <input className="planet-input" type="submit" value={button.name}
            onClick={((event) => onChangeShowListValue(event))} 
            style={{"height": `${button.name.length}rem`}}
            />
            <Characters
            planet={button.name}
            residents={button.residents}
            show={button.showList}
            />
          </div>
        )
      }else if (amIClicked === true){
        return (
          <div key={button.name} className="planet" >
            <input className="planet-input" type="submit" value={button.name}
              style={{ "height": `${button.name.length}rem` }}
            />
            <p className="no-residents" >No one lives here</p>
          </div>
        )
      }
      return null;  
    })
    
    const onChangeShowListValue = event => {
      const buttonClicked = event.target.value;
      this.setState({
        buttons: this.state.buttons.map(button => {
          if (button.name === buttonClicked) {
            return {
              ...button,
              showList: !button.showList
            }
          }
          return button;
        })
      })
    }
  
    return (
      <div className="planet-container" >
        {dimensionButtons}
      </div>
    );
  }
}

export default Dimensions;