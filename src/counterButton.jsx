function counterButton(props) {
    const onClick = () => {
        console.log("clicked!")
    }

    return (<button onCLick={onClick}>Click Me</button>)
}

export default counterButton