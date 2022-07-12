import './App.css';
import CounterButton from './CounterButton';
import CounterText from './CounterText';
import DoubleButton from './DoubleButton';

function App() {
    return (
        <div className="App">
            <CounterButton />
            <DoubleButton/>
            <CounterText />
        </div>
    );
}

export default App;
