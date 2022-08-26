import './App.css';
import BuyStockClass from './components/BuyStockClass';
import BuyStockFn from './components/BuyStockFn';
import CounterClass from './components/CounterClass';
import CounterFn from './components/CounterFn';
import TimerClass from './components/TimerClass';
import TimerFn from './components/TimerFn';

function App() {
  return (
    <div className="App">
      <TimerClass />
      <TimerFn />
      <CounterClass />
      <CounterFn />
      <BuyStockClass />
      <BuyStockFn />
    </div>
  );
}

export default App;
