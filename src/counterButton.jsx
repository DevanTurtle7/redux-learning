import { useDispatch } from "react-redux"
import { increment, decrement } from "./slice"

function CounterButton(props) {
    const dispatch = useDispatch()

    const onClick = () => {
        console.log("clicked!")
        dispatch(increment())
    }

    return (<button onClick={onClick}>Click Me</button>)
}

export default CounterButton