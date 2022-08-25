import React, { Component } from "react";

export const withCounter = (ReactComponent) => {
  return class NewComponent extends Component {
    state = {
      counter: 0,
    };

    incrementCounter = () => {
      this.setState({ counter: this.state.counter + 1 });
    };

    decrementCounter = () => {
      this.setState({ counter: this.state.counter - 1 });
    };

    render() {
      return (
        <ReactComponent
          counter={this.state.counter}
          incrementCounter={this.incrementCounter}
          decrementCounter={this.decrementCounter}
        />
      );
    }
  }
};
