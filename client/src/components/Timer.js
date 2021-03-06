import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
  state = {
    secCount: 0,
    minCount: 0
  };

  startTimer = () => {
    //console.log('SET TIMER RUNNNINGGGGG');
    let timer = setInterval(this.timer, 1000);
    this.setState({ timer });
  };

  timer = () => {
    //console.log('TIMER: ', this.state.secCount, this.state.minCount);
    if (this.state.secCount === 59) {
      this.setState({ secCount: 0, minCount: this.state.minCount + 1 });
    } else {
      this.setState({ secCount: this.state.secCount + 1 });
    }
  };

  onClick = () => {
    const { run } = this.props;
    run();
    this.startTimer();
  };
  render() {
    const { run } = this.props;
    return (
      <div className="App">
        <button onClick={this.onClick} className="modalBtn">
          Start Workout
        </button>
        <h3>
          {this.state.minCount}:{this.state.secCount}
        </h3>
      </div>
    );
  }
}

export default Timer;
