import { useDispatch, useSelector } from "react-redux"
import { incrementByAmount } from "./slice";

function DoubleButton(props) {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(incrementByAmount(count * 2))
    }

    return (<button onClick={onClick}>Double time</button>)
}