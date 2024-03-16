import "./App.css";
import "./style.css";
import style from "./custom.module.css";
import React, { useState, Component, useEffect } from "react"; 

function User2(props) {

    useEffect(() => {
        console.warn("useEffect");
    })

    return(
        <div className="App" >
            <h1 className="primary">Count: {props.count}</h1>
            <h1 style={{backgroundColor: "red", color: "whitesmoke"}}>Data: {props.data}</h1>
            <h1 className={style.success}>Hello World</h1>

        </div>
    )
}

export default User2;