function Student2(props) {
    return(
        <div>
            <span>{props.data.name}</span>
            <span>{props.data.email}</span>
            <span>{props.data.contact}</span>
        </div>
    )
}

export default Student2;