import React, { Component } from "react";

class TimerClass extends Component {
  state = {
    time: 0,
    isPaused: true,
  };

  toggleStopwatch = () => {
    if (this.state.isPaused) {
      this.setState({ isPaused: false });
      this.interval = setInterval(() => {
        this.setState((prev) => ({
          time: prev.time + 0.01,
        }));
      }, 10);
    } else {
      this.setState({ isPaused: true });
      clearInterval(this.interval);
    }
  };

  clearStopwatch = () => this.setState({ time: 0 });

  renderSeconds = () => {
    return Math.floor(this.state.time);
  };

  renderMillis = () => {
    return ("0" + Math.floor(this.state.time * 100)).slice(-2);
  };

  render() {
    const { isPaused } = this.state;
    return (
      <div className="timer__container">
        <h3>Stopwatch Class</h3>
        <p>
          {this.renderSeconds()}s: {this.renderMillis()}
        </p>
        <div>
          <button className="timer__btn" onClick={this.toggleStopwatch}>
            {isPaused ? "start" : "stop"}
          </button>
          <button className="timer__btn" onClick={this.clearStopwatch}>
            reset
          </button>
        </div>
      </div>
    );
  }
}

export default TimerClass;
