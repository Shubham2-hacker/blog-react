import "./App.css";
import React, { Component, useEffect, useState } from "react";
import User6 from "./User6";
import { CommonContext } from "./component/CommonContext";
import Main from "./component/Main";
import UpdateButton from "./component/UpdateButton";
import Header from "./component/Header";
import Footer from "./component/Footer";

class App extends Component {
  constructor() {
    super();

    this.updateColor = (color) => {
      this.setState({ color: color });
    };

    this.state = {
      color: "green",
      updateColor: this.updateColor,
    };
  }

  render() {
    return (
      <CommonContext.Provider value={this.state}>
        <Header />
        <h1>Context API</h1>
        <Main />
        <UpdateButton />
        <Footer />
      </CommonContext.Provider>
    );
  }

  // const [data, setData] = useState({ name: "shubham", age: 21 });

  // return (
  //   <div className="App">
  //     <h1>State Object with Hooks</h1>
  //     <h1>{data.name}</h1>
  //     <h1>{data.age}</h1>
  //     <input
  //       type="text"
  //       placeholder="enter name"
  //       value={data.name}
  //       onChange={(e) => {
  //         setData({ ...data, name: e.target.value });
  //       }}
  //     />
  //     <br /> <br />
  //     <input
  //       type="text"
  //       placeholder="enter age"
  //       value={data.age}
  //       onChange={(e) => {
  //         setData({ ...data, age: e.target.value });
  //       }}
  //     />
  //   </div>
  // );
  // const [count, setCount] = useState(0);

  // function updateCounter() {
  //   // let rand = Math.floor(Math.random() * 10);

  //   // setCount((pre) => {
  //   //   if (pre < 5) {
  //   //     alert("low value");
  //   //   }

  //   //   return rand;
  //   // });

  //   for(let i=0; i<5;i++) {
  //     setCount((pre) => pre+1);
  //   }
  // }

  // return (
  //   <div className="App">
  //     <User6 count={count}/>
  //     <button onClick={() => {setCount(Math.floor(Math.random()*10))}}>Click Me</button>
  //     {/* <button onClick={updateCounter}>Update Count</button> */}
  //   </div>
  // );

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [mobile, setMobile] = useState("");
  // const [id, setID] = useState("");
  // const [data, setData] = useState([]);

  // function saveUser() {
  //   const data = { name, email, mobile };
  //   fetch("", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       console.warn(resp);
  //     });
  //   });
  // }

  // return (
  //   <div className="App">
  //     <h1>Post API Method</h1>
  //     <input
  //       type="text"
  //       onChange={(e) => setName(e.target.value)}
  //       name="name"
  //       value={name}
  //     />
  //     <br />
  //     <br />
  //     <input
  //       type="text"
  //       onChange={(e) => setEmail(e.target.value)}
  //       name="email"
  //       value={email}
  //     />
  //     <br />
  //     <br />
  //     <input
  //       type="text"
  //       onChange={(e) => setMobile(e.target.value)}
  //       name="mobile"
  //       value={mobile}
  //     />
  //     <br />
  //     <br />

  //     <button type="button" onClick={saveUser}>
  //       Submit
  //     </button>
  //   </div>
  // );

  // useEffect(() => {
  //   getUsers();
  // }, []);

  // function getUsers() {
  //   fetch("").then((result) => {
  //     result.json().then((resp) => {
  //       setName(resp[0].name);
  //       setEmail(resp[0].email);
  //       setMobile(resp[0].mobile);
  //       setID(resp[0].id);
  //     });
  //   });
  // }

  // function getList() {
  //   fetch("").then((result) => {
  //     result.json().then((resp) => {
  //       setData(resp);
  //     });
  //   });
  // }

  // function deleteUser(id) {
  //   fetch(`/${id}`, {
  //     method: "DELETE",
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       console.warn(resp);
  //       getList();
  //     });
  //   });
  // }

  // function selectUser(id) {
  //   let item = data[id - 1];

  //   setName(item.name);
  //   setEmail(item.email);
  //   setMobile(item.mobile);
  //   setID(item.id);
  // }

  // function updateUser() {

  //   const item = {name, email, mobile, id};

  //   fetch(`/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(item),
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       console.warn(resp);
  //       getList();
  //     });
  //   });
  // }

  // return (
  //   <div className="App">
  //     {/* <h1>Get Method API</h1> */}
  //     <h1>Delete Method</h1>
  //     <table border="2">
  //       <tr>
  //         <td>ID</td>
  //         <td>Name</td>
  //         <td>Email</td>
  //         <td>Mobile</td>
  //         <td>Operation</td>
  //       </tr>
  //       {data.map((item) => (
  //         <tr>
  //           <td>{item.userid}</td>
  //           <td>{item.name}</td>
  //           <td>{item.email}</td>
  //           <td>{item.mobile}</td>
  //           <td>
  //             <button onClick={deleteUser(item.id)}>Delete</button>
  //             <button onClick={selectUser(item.id)}>Update</button>
  //           </td>
  //         </tr>
  //       ))}
  //     </table>

  //     <div>
  //       <input
  //         type="text"
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //       />
  //       <br />
  //       <br />
  //       <input
  //         type="text"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //       />
  //       <br />
  //       <br />
  //       <input
  //         type="text"
  //         value={mobile}
  //         onChange={(e) => setMobile(e.target.value)}
  //       />
  //       <br />
  //       <br />

  //       <button type="button" onClick={updateUser()}>Update User</button>
  //     </div>
  //   </div>
  // );
}

export default App;
