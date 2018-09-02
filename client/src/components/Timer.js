import React, { Component } from 'react';

class Timer extends Component {
  state = {
    count: 0
  };

  startTimer = () => {
    let timer = setInterval(this.timer, 1000);
    this.setState({ timer });
  };

  timer = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div className="App">
        <h3>{this.state.count}</h3>
        <button onClick={this.startTimer} />
      </div>
    );
  }
}

export default Timer;
