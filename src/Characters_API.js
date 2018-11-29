import axios from 'axios';

const Characters = () => {
  const character = {};

  axios({
    method: "GET",
    url: `https://rickandmortyapi.com/api/character/21`,
    dataResponse: "json"
  }).then(
    (response) => {
      character.result = response.data
    }
    )
    return character
  }


export default Characters;