import React, { Component } from 'react';
import axios from 'axios';
import Characters from "./Characters";

//Here we get the all the planets in the dimensions of Rick and Morty's multiverse.

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
      dataResponse: "json"
    }).then(
      (response) => {
        const results = response.data.results
        const array = results.map(result => {
          return ({
            name: result.name,
            residents: result.residents,
            type: result.type,
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
            <label htmlFor="planet-name">{button.name}</label>
            <input id="planet-name" className="planet-input" type="submit" value={button.name}
            onClick={((event) => onChangeShowListValue(event))} 
            style={{"height": `${button.name.length}rem`,
            "width": `${button.name.length}rem`}}
            />
            <p className="planet--type">Type: {button.type}</p>
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
            <label htmlFor="planet-name">{button.name}</label>
            <input id="planet-name" className="planet-input--clicked" type="submit" value={button.name}
              style={{ "height": `${button.name.length}rem`, 
              "width": `${button.name.length}rem`}}
            />
            <p>Type: {button.type}</p>
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
        {(amIClicked ===true) ? <p className="planet--info" >Click on a planet to see its residents.</p> : null}
        {dimensionButtons}
      </div>
    );
  }
}

export default Dimensions;