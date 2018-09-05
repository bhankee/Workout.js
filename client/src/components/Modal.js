import React, { Component } from 'react';
import Push from './Push';
import Length from './Length';

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
      <div>
        <h1>MODAL</h1>
        {this.wodChoice()}

        <button onClick={toggleModal}>Close Wod</button>
      </div>
    );
  }
}

export default Modal;
