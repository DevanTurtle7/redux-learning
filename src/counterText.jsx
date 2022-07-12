import { useSelector } from "react-redux";

function CounterText(props) {
    const count = useSelector((state) => state.counter.value);

    return (
        <p>Counter is: {count}</p>
    )
}

export default CounterText;