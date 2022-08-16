import "./Counter.css";
import React, { Component } from "react";

class CounterClass extends Component {
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
      <section>
        <h2>Counter Class</h2>
        {this.state.counter}
        <div>
          <button onClick={this.incrementCounter}>Increment</button>
          <button onClick={this.decrementCounter}>Decrement</button>
        </div>
      </section>
    );
  }
}

export default CounterClass;
