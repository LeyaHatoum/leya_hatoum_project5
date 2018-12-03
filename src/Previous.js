import React from 'react';

function Prev(props) {
  return (
    <button onClick={props.toggle} disabled={props.active}>Previous</button>
  );
}

export default Prev;