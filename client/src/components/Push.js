import React, { Component } from 'react';
import Timer from './Timer';

import './Push.css';

class Push extends Component {
  state = {
    wods: [],
    itemsRendered: 0
  };

  startWod = () => {
    this.updateRenderedThings();
    this.pushWod();
  };

  pushWod = () => {
    this.timer = setTimeout(this.updateRenderedThings, 30000);
  };

  updateRenderedThings = () => {
    console.log('UPDATING');
    const { itemsRendered, wods } = this.state;
    const { movements } = this.props;
    const updatedState = {
      wods: wods.concat(movements[itemsRendered]),
      itemsRendered: itemsRendered + 1
    };

    this.setState(updatedState);
    console.log('WOD STATE: ', wods);
    if (updatedState.itemsRendered < movements.length) {
      this.pushWod();
    } else {
      clearTimeout(this.timer);
    }
  };

  render() {
    const { wods } = this.state;
    const { movements, time } = this.props;

    return (
      <div className="pushWrapper">
        <h3>Perform each move for exactly {time} seconds </h3>
        <div>
          <Timer run={this.startWod} />
        </div>

        <div className="movements">
          {`[ `}
          {wods.map((move, index) => (
            <li key={index}>{move}, </li>
          ))}
          {` ]`}
        </div>
      </div>
    );
  }
}

export default Push;
