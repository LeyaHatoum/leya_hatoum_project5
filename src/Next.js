import React from 'react';

function Next(props) {
  return (
    <div className="resident-more_container">
      <label htmlFor="next-resident">Next</label>
      <button id="next-resident" className="resident-more" onClick={props.toggle} disabled={props.active}>Next Resident</button>
    </div>
  );
}

export default Next;