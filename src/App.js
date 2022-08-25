import './App.css';
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
    </div>
  );
}

export default App;
