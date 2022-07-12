import './App.css';
import CounterButton from './CounterButton';
import CounterText from './CounterText';
import DoubleButton from './DoubleButton';
import ResetButton from './ResetButton';

function App() {
    return (
        <div className="App">
            <CounterButton />
            <DoubleButton/>
            <ResetButton/>
            <CounterText />
        </div>
    );
}

export default App;
