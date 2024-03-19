function User3(props) {

    const data = {name: "Shubham Chotaliya", email: "shubham@email.com"};
    return(
        <div>
            <h1>User Name: </h1>
            <button onClick={() => props.alert(data)}>Click Me</button>
        </div>
    )
}

export default User3;