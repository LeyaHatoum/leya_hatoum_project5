import React, { Component } from 'react';
import Next from './Next';
import Prev from './Previous';
import Resident from './Resident';



class TheResidents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      index: 1,
      disabledNext: false,
      disabledPrev: false
    }
  }

  togglePrev(event) {
    let index = this.state.index - 1;
    let disabledPrev = (index === 0);

    this.setState({
      index: index,
      disabledNext: false,
      disabledPrev: disabledPrev
    })
  }

  toggleNext(event) {
    let index = this.state.index + 1;
    let disabledNext = index === (this.props.characters.length - 1);

    this.setState({
      index: index,
      disabledNext: disabledNext,
      disabledPrev: false
    })
  }

  render() {
    const { index, disabledNext, disabledPrev } = this.state;
    const residentInfo = (this.props.characters) ? this.props.characters[index] : null;

    if (residentInfo) {
      return (
        <div>
          <Resident {...residentInfo} />
          <div>
            <Prev toggle={(event) => this.togglePrev(event)} active={disabledPrev} />
            <Next toggle={(event) => this.toggleNext(event)} active={disabledNext} />
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}

export default TheResidents;