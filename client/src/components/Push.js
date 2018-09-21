import React, { Component } from 'react';
import Timer from './Timer';

import './Push.css';

class Push extends Component {
  state = {
    wods: [],
    itemsRendered: 0
  };

  startWod = () => {
    this.pushWod();
  };

  pushWod = () => {
    this.updateRenderedThings();
    this.timer = setInterval(this.updateRenderedThings, 30000);
  };

  updateRenderedThings = () => {
    const { itemsRendered, wods } = this.state;
    const { movements } = this.props;

    const updatedState = {
      wods: wods.concat(movements[itemsRendered]),
      itemsRendered: itemsRendered + 1
    };

    this.setState(updatedState);

    if (updatedState.itemsRendered === movements.length) {
      clearTimeout(this.timer);
    }
  };

  render() {
    const { wods } = this.state;
    const { movements, time } = this.props;
    console.log('WOD MATCH ME--------', wods);

    return (
      <div className="pushWrapper">
        <h3>Perform each move for exactly {time} seconds </h3>
        <div>
          <Timer run={this.startWod} />
        </div>

        <div className="movements">
          {`[ `}
          {wods.map((move, index) => (
            <li key={index} className={wods[index] == move ? 'activeLi' : null}>
              {move},{' '}
            </li>
          ))}
          {` ]`}
        </div>
      </div>
    );
  }
}

export default Push;
