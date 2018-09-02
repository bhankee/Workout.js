import React, { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <div>
        <h1>MODAL</h1>
        <button onClick={this.props.toggleModal}>Close Wod</button>
      </div>
    );
  }
}

export default Modal;
