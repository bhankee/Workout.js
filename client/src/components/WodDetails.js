import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getWodQuery } from '../queries/queries';

import Modal from './Modal';

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
          <h2>{wod.name}</h2>
          <p>{wod.difficulty}</p>
          <div>
            {wod.movements.map(move => (
              <p>{move}</p>
            ))}
          </div>
          <p>{wod.group.name}</p>
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
