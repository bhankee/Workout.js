import React, { Component } from 'react';

class Push extends Component {
  render() {
    const { movements } = this.props;
    return (
      <div>
        <h1>[{movements}]</h1>
      </div>
    );
  }
}

export default Push;
