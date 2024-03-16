import "./App.css";
import React, { useState, Component, useEffect } from "react"; 
import {Button} from "react-bootstrap";

// import User2 from "./User2";
// import Student1 from "./Student1";
// import User1 from "./User1";
// import Members from "./Members";


// bootstrap in react


function App() {

    return(
        <div className="App">
            <h1>Bootstrap in React</h1>
            <Button>Click Me</Button>
        </div>
    )
}





// ------------------------------------------------------------------------------------------------




// css style in react


// function App() {

//     const [count, setCount] = useState(10);
//     const [data, setData] = useState(100);

//     return(
//         <div className="App">
//             <User2 count={count} data={data} />

//             <button onClick={() => setCount(count+1)}>Update Counter</button>
//             <button onClick={() => setData(data+1)}>Update Data</button>
//         </div>
//     )
// }






// ------------------------------------------------------------------------------------------------



// class component lifecycle methods


// class App extends Component {

//     constructor() {
//         super();
//         this.state = {
//             // name: "Shubham"
//             // count: 0,
//             show: true,
//         }
//     }

//     // componentDidMount(){
//     //     console.log("componentDidMount");
//     // }



//     // this is use for:- get previous data to 10 numbers 
//     // componentDidUpdate(prePops, preState, snapshot) {
//     //     console.warn("componentDidUpdate", preState.count, this.state.count);

//     //     if(this.state.count < 10) {
//     //         this.setState({count: this.state.count+1});
//     //     }
//     // }



//     // this is use for specific condition where render will stop rendering
//     // shouldComponentUpdate() {
//     //     console.warn("shouldComponentUpdate", this.state.count);

//     //     if(this.state.count < 5) {
            
//     //         return true;
//     //     }
//     // }

//     render() {
//         return(
//             <div className="App">
//                 {/* <h1>Component Did Mount {this.state.name}</h1> */}
//                 {/* <h1>Component Did Update {this.state.count}</h1> <br /> */}
//                 {/* <h1>Should Component Update {this.state.count}</h1> <br /> */}
//                 {
//                     this.state.show ? <Student1 /> : <h1>Child Component Removed</h1>
//                 }

//                 {/* <button onClick={() => this.setState({count: this.state.count+1})} >Update name</button> */}
//                 <button onClick={() => this.setState({show: !this.state.show})} >Toggle</button>
                
//             </div>
//         )
//     }
// }





//----------------------------------------------------------------




// render lifecycle


// function App() {

//     const [name, setName] = useState("Shubham");
//     return(
//         <div className="App">
//             <h1>Render method in React</h1>
//             <User1 name={name} />

//             <button onClick={() => setName("Chotaliya")}>Update me</button>
//         </div>
//     )
// }



// ----------------------------------------------------------------



// class life cycle method

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: "Shubham",
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello World {this.state.data}</h1>
//         <User1 />
//       </div>
//     );
//   }
// }




//----------------------------------------------------------------




// send functions using props

// function App() {

//     function getData() {
//         alert("hello from props");
//     }
//   return (
//     <div className="App">
//       <User data={getData} />
//       <Members data={getData} />
//     </div>
//   );
// }

// ------------------------------------------------------------------------------------------------

// handle form

// function App() {

//     const [name, setName] = useState("");
//     const [tnc, setTnc] = useState(false);
//     const [interest, setInterest] = useState("");

//     function getFormData(e) {
//         e.preventDefault();
//     }

//     return (
//         <div className="App">
//             <form onSubmit={getFormData}>
//                 <input type="text" placeholder="enter name" value={name} onChange={(e) => setName(e.target.value)} /> <br /><br />

//                 <select value={interest} onChange={(e) => setInterest(e.target.value)}>
//                     <option>Select Option</option>
//                     <option>Car</option>
//                     <option>Watch</option>
//                 </select> <br /><br />

//                 <input type="checkbox" value={tnc} onChange={(e) => setInterest(e.target.checked)} />
//                 <span>Accept Terms & Condition</span> <br /> <br />

//                 <button type="submit">Submit</button>

//             </form>

//             <Profile />
//         </div>
//     )
// }

// ------------------------------------------------------------------------------------------------

// Hide, Show, Toggle

// function App() {

//     const [status, setStatus] = useState(true);

//     return(
//         <div className="App">
//             {status ? <h1>Hello Morning</h1> : null}
//             {/* <button onClick={() => {setStatus(false)}}>Hide</button>
//             <button onClick={() => {setStatus(true)}}>Show</button> */}

//             <button onClick={() => {setStatus(!status)}}>Toggle</button>
//         </div>
//     )

// }

// ------------------------------------------------------------------------------------------------

// Get dat from input tag

// function App() {

//   const [data, setState] = useState(null);
//   const [print, setPrint] = useState(false);

//   function getData(val) {
//     // console.log(val.target.value)
//     setState(val.target.value)
//   }

//   return (
//     <div className="App">
//       {print ? <h1>{data}</h1> : null }
//       <input type="text" onChange={getData} />
//       <button onClick={() => setPrint(true)}>Print</button>
//     </div>
//   )
// }

// --------------------------------------------------------------------------------------------------------------------

// class props

// class App extends Component {

//     constructor() {
//         super();
//         this.state = {
//           name: "Shubham",
//       }
//     }

//     render() {
//       return(
//         <div className="App">
//           <h1>Props in Class</h1>
//           <Student name={this.state.name} email={"shubham@email.com"}/>
//           <button onClick={() => this.setState({name: "Chotaliya"})}>Update me</button>
//         </div>
//       )
//     }
// }

// function props

// function App() {
//   const [name, setState] = useState("shubham");

//   return (
//     <div className="App">
//       <h1>Props in React</h1>
//       <Student name={name} email={"shubham@email.com"} other={{address: "india", mobile: "111"}} />
//       <button onClick={() => {setState("Chotaliya")}}>Update Name</button>

//     </div>
//   )

// }

// --------------------------------------------------------------------------------------------------------------------

// class State

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data: 1
//     }
//   }

//   apple() {
//     // alert('apple');
//     this.setState({data: this.state.data+1});
//   }

// render() {
//   return(
//     <div className='App'>
//       <h1>{this.state.data}</h1>
//       <button onClick={() => this.apple()}>click me</button>
//     </div>
//   )
// }
// }

// function State

// function App() {

//   const [data, setData] = useState(0);
//   function updateData() {
//     setData(data+1);
//   }
//   return(
//     <div className="App">
//       <h1>{data}</h1>
//       <button onClick={updateData}>click me</button>
//     </div>
//   )
// }

// function App() {
//   let data = "Shubham";

//   function Apple() {
//       data = "Cookie";
//       alert(data);
//     }

//   return (
//     <div className="App">
//       <h1>{data}</h1>
//       <Users />
//       <button onClick={Apple}>click me</button>
//       {/* <button onClick={() => alert("switerland")}>click me</button> */}

//     {/* 1) */}
//     <Apple />

//     {/* 2) */}
//     {Apple()}
//     </div>
//   );
// }

export default App;
