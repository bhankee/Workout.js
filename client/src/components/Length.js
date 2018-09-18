import React, { Component } from 'react';
import Timer from './Timer';

import './Push.css';

class Length extends Component {
  state = {
    wods: [],
    itemsRendered: 0,
    cuurentString: '',
    currentLength: null
  };

  startWod = () => {
    this.updateRenderedThings();
    this.pushWod();
    console.log('MOVEMENTS:', this.props.movements);
  };

  pushWod = () => {
    this.timer = setTimeout(this.updateRenderedThings, 20000);
  };

  updateRenderedThings = () => {
    console.log('UPDATING');
    const { itemsRendered, wods, currentString, currentLength } = this.state;
    const { movements } = this.props;
    const updatedState = {
      wods: wods.concat(movements[itemsRendered]),
      currentString: movements[itemsRendered],
      currentLength: movements[itemsRendered].toString(),
      itemsRendered: itemsRendered + 1
    };

    this.setState(updatedState);
    console.log('CURRENT MOVE: ', currentString);
    console.log('CURRENT Length: ', currentLength);
    console.log('WOD STATE: ', wods);
    if (updatedState.itemsRendered < movements.length) {
      this.pushWod();
    } else {
      clearTimeout(this.timer);
    }
  };

  current = () => {
    const { wods } = this.state;
    wods.map((move, index) => {
      this.setState({ currentString: move });
    });
  };

  render() {
    const { wods, currentString, currentLength } = this.state;
    const { movements } = this.props;

    return (
      <div className="pushWrapper">
        <h3>
          Perform each move the number of the length times (number dsiplayed
          under string is length){' '}
        </h3>

        <Timer run={this.startWod} />
        <h2>
          {currentString}
          .length()
        </h2>
        <h2>{currentLength ? currentLength.length : null}</h2>
      </div>
    );
  }
}

export default Length;
