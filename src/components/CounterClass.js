import "./Counter.css";
import React, { Component } from "react";
import { withCounter } from "../hoc/withCounter";

class CounterClass extends Component {
  state = {
    counter: 0,
    hasAlert: false,
  };

  // incrementCounter = () => {
  //   this.setState({ counter: this.state.counter + 1 });
  // };

  // decrementCounter = () => {
  //   this.setState({ counter: this.state.counter - 1 });
  // };

  handleAlert = () => {
    setTimeout(() => {
      this.setState({ hasAlert: true });
    }, 3000);
  };

  componentDidUpdate() {
    if (this.state.hasAlert) alert(this.props.counter);
  }

  render() {
    const { counter, incrementCounter, decrementCounter } = this.props;
    return (
      <section>
        <h2>Counter Class</h2>
        {counter}
        <div>
          <button onClick={incrementCounter}>Increment</button>
          <button onClick={decrementCounter}>Decrement</button>
          <button onClick={this.handleAlert}>Alert after 3s</button>
        </div>
      </section>
    );
  }
}

export default withCounter(CounterClass);
