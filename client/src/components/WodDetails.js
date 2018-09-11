import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getWodQuery } from '../queries/queries';

import Modal from './Modal';
import './WodDetails.css';

class WodDetails extends Component {
  state = {
    showModal: false
  };

  displayWodDetails = () => {
    console.log('HERREEE: ', this.props.data);
    const { wod } = this.props.data;
    // switch statement for wod component
    if (wod) {
      return (
        <div>
          <div className="containerFlexOne">
            <h2 className="wodName">
              <span className="array">Array</span>.
              {wod.name.charAt(0).toUpperCase() + wod.name.slice(1)}
            </h2>
            <h3 className="wodDesc">This is how .push works</h3>
          </div>

          <p>Difficulty: {wod.difficulty}</p>
          <div className="movesContainer">
            Movements:
            {wod.movements.map(move => (
              <div>{move}</div>
            ))}
          </div>
        </div>
      );
    } else {
      return <div>No Wod selected</div>;
    }
  };

  toggleModal = () => this.setState({ showModal: !this.state.showModal });
  render() {
    const { wod } = this.props.data;
    const { showModal } = this.state;
    return (
      <div>
        <div>{this.displayWodDetails()} </div>
        <button onClick={this.toggleModal}>Start Wod</button>
        {showModal ? (
          <Modal
            toggleModal={this.toggleModal}
            wodName={wod.name}
            movements={wod.movements}
          />
        ) : null}
      </div>
    );
  }
}

export default graphql(getWodQuery)(WodDetails);
