import React, { Component } from 'react';

class Timer extends Component {
  state = {
    secCount: 0,
    minCount: 0
  };

  startTimer = () => {
    let timer = setInterval(this.timer, 1000);
    this.setState({ timer });
  };

  timer = () => {
    console.log('TIMER: ', this.state.secCount, this.state.minCount);
    if (this.state.secCount === 59) {
      this.setState({ secCount: 0, minCount: this.state.minCount + 1 });
    } else {
      this.setState({ secCount: this.state.secCount + 1 });
    }
  };
  render() {
    return (
      <div className="App">
        <h3>
          {this.state.minCount}:{this.state.secCount}
        </h3>
        <button onClick={this.startTimer} />
      </div>
    );
  }
}

export default Timer;
