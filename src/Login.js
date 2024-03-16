import React, { useState } from "react";

function Login() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPasswordErr] = useState(false);

    function loginHandler(e) {
        if(user.length < 3 || password.length < 6) {
            alert("Type correct values");
        }

        e.preventDefault();
    }

    function userHandler(e) {
        let item = e.target.value;

        if(item.length < 3) {
            setUserErr(true);
        } else {
            setUserErr(false);
        }

        setUser(item);
    }

    function passHandler(e) {
        let item = e.target.value;

        if(item.length < 6) {
            setPasswordErr(true);
        } else {
            setPasswordErr(false);
        }

        setPassword(item);
    }

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={loginHandler}>

      <input type="text" placeholder="enter user id" onChange={userHandler}/> 
      {userErr ? <span>User Not Found</span> : null}
      <br /> <br />

      <input type="password" placeholder="enter user password" onChange={passHandler} /> 
      {passErr ? <span>Password is not valid</span> : null}
      <br /> <br />

      <button type="submit">Login</button>

      </form>
    </div>
  );
}

export default Login;
