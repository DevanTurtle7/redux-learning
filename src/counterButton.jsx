function counterButton(props) {
    const onClick = () => {
        print("clicked!")
    }

    return (<button onCLick={onClick}>Click Me</button>)
}

export default counterButton