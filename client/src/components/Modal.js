import React, { Component } from 'react';
import Push from './Push';
import Length from './Length';
import './Modal.css';

class Modal extends Component {
  wodChoice = () => {
    let { wodName, movements } = this.props;
    switch (wodName) {
      case 'push':
        return <Push movements={movements} />;
        break;
      case 'length':
        return <Length movements={movements} />;
        break;

      default:
        break;
    }
  };

  render() {
    const { toggleModal } = this.props;
    return (
      <div className="modalContainer">
        <h1>Let's Go</h1>
        {this.wodChoice()}

        <button onClick={toggleModal} className="modalBtn">
          Close Workout
        </button>
      </div>
    );
  }
}

export default Modal;
