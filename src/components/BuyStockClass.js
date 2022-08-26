import React from "react";
import { fetchStockData } from "../api/index.js";
import { connect } from "react-redux";
import * as actions from "../actions";

class BuyStockClass extends React.Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    fetchStockData().then(data => {
        this.props.setStocksAmount(data.initStockAmount);
        this.setState({ isLoading: false });
    })
  }

  render() {
    const { stocksAmount, add, remove } = this.props;
    const { isLoading } = this.state;
    return (
      <section>
        <header>BuyStockClass: {this.props.test}</header>
        <button onClick={add}>+</button>
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <span>{stocksAmount}</span>
        )}
        <button onClick={remove}>-</button>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        stocksAmount: state.stocksAmount
    }
}

export default connect(mapStateToProps, actions)(BuyStockClass);
