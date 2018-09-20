import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getWodQuery } from '../queries/queries';
import bg from '../images/pattern_blue.png';
import Modal from './Modal';
import './WodDetails.css';

const stickyBackground = {
  background: `url(${bg})`,
  backgroundAttachment: 'fixed'
};

class WodDetails extends Component {
  state = {
    showModal: false
  };
  warmup = () => {
    const { wod } = this.props.data;
    if (wod.name === 'push') {
      return `
      Push is part of the Array API that when called on an array adds an element to the end of that array. 
      
      EXAMPLE
       let arr = [1,2,3]
      arr.push(4) 
      console.log(arr) = [1,2,3,4]
      `;
    } else {
      return `
      other
      `;
    }
  };

  displayWodDetails = () => {
    console.log('HERREEE: ', this.props.data);
    const { wod } = this.props.data;
    // switch statement for wod component
    if (wod) {
      return (
        <div className="containerFlexOne">
          <div className="wodName">
            <h2>
              <span className="array">Array.</span>
              {wod.name.charAt(0).toUpperCase() + wod.name.slice(1)}
            </h2>
            <div className="difficulty">Difficulty: {wod.difficulty}</div>
            <div className="movesContainer">
              Movements:
              {wod.movements.map(move => (
                <div>{move}</div>
              ))}
            </div>
          </div>
          <div className="wodDesc">
            <h2>WARM UP</h2>

            <div className="warmUp">{this.warmup()}</div>
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
      <div className="detailsContainer" style={stickyBackground}>
        <div>{this.displayWodDetails()}</div>
        <div className="buttonWrap">
          <button className="startBtn" onClick={this.toggleModal}>
            Open Workout
          </button>
        </div>

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
