function CounterButton(props) {
    const onClick = () => {
        console.log("clicked!")
    }

    return (<button onClick={onClick}>Click Me</button>)
}

export default CounterButton