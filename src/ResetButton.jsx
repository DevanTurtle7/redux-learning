import { useDispatch } from "react-redux"
import { setAmount } from "./slice";

function ResetButton(props) {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(setAmount(0))
    }

    return (<button onClick={onClick}>Reset</button>)
}

export default ResetButton