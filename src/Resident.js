import React from 'react';

function Resident(props) {
  return (
    <div>
        <div key={props.id} className="resident">
              <div className="resident-info">
                <p>ID: {props.id}</p>
                <p>Name: {props.name}</p>
                <p>Gender: {props.gender}</p>
                <p>Species: {props.species}</p>
              </div>
              <div className="resident-pic">
                <img src={props.image} alt={props.name} />
              </div>
              <p className="resident-status">Status: {props.status}</p>
        </div>
    </div>
  )
}

export default Resident;