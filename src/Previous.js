import React from 'react';

function Prev(props) {
  return (
    <div className="resident-more_container">
      <label htmlFor="previous-resident">Previous</label>
      <button id="previous-resident" className="resident-more" onClick={props.toggle} disabled={props.active}>Previous Resident</button>
    </div>
  );
}

export default Prev;