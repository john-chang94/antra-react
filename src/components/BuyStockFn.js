import React, { useEffect, useState } from "react";
import { fetchStockData } from "../api";
import { connect } from "react-redux";
import * as actions from "../actions";

const BuyStockFn = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  const { stocksAmount, add, remove, setStocksAmount } = props;

  useEffect(() => {
    fetchStockData().then(data => {
        setStocksAmount(data.initStockAmount);
        setIsLoading(false);
    })
  }, [])

  return (
    <section>
      <header>BuyStockFn:{props.test}</header>
      <button className="timer__btn" onClick={add}>+</button>
      <span>{isLoading ? "Loading..." : stocksAmount}</span>
      <button className="timer__btn" onClick={remove}>-</button>
    </section>
  );
};

const mapStateToProps = (state) => {
    return {
        stocksAmount: state.stocksAmount
    }
}

export default connect(mapStateToProps, actions)(BuyStockFn);
