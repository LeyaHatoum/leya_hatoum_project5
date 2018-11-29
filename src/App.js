import React, { Component } from 'react';
import axios from 'axios';
import "./app.css";
import Characters from "./Characters_API";

class App extends Component {
  constructor() {
    super()
    this.state = {
      //create an empty array to hold the results we're gonna get
      results: [],
      residents: []
    }
  }

  componentDidMount(pageNumber) {
    console.log("I mounted")
    // make the AJAX request using axios
    axios({
      method: "GET",
      url: `https://rickandmortyapi.com/api/location/`,
      dataResponse: "json",
      params: {
        page: pageNumber,
      }
    }).then(
      (response) => {
        const results = response.data.results
        const residents = response.data.results[0].residents
        this.setState({
          results: results,
          residents: residents
        })
        console.log("residents", this.state.residents)
      }
    )
  }

  
  render() {
    console.log("I'm the render")
    console.log("Chosen character:", Characters())
    return (
      <div className="App">
       {this.state.results.map(location => {
         return(
           <div>
             <button>{location.name}</button>
           </div>
         )
       })
      }
      </div>
    );
  }
}

export default App;

//Pseudo Code: 
//For the residents of each planet, you need to call them by their id from another api call. ---> https://rickandmortyapi.com/api/character/${i}