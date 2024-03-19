import React, {
  createRef,
  useRef,
  forwardRef,
  Component,
  PureComponent,
  useState,
  useMemo,
} from "react";
import "./App.css";
// import { Table } from "react-bootstrap";
// import Student2 from "./Student2";
// import Cols from "./Cols";
// import User3 from "./User3";
// import User4 from "./User4";
// import User5 from "./User5";

// class App extends Component {
//   constructor() {
//     super();
//     this.inputRef = createRef();

//     // this.state = {
//     //   count: 1,
//     // };
//   }

//   componentDidMount() {
//     // console.warn(this.inputRef.current.value = "1000")
//   }

//   getVal() {
//     console.warn(this.inputRef.current.value);
//     this.inputRef.current.style.backgroundColor = "#000";
//     this.inputRef.current.style.color = "whitesmoke";
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>Ref in React</h1>

//         <input type="text" ref={this.inputRef} />
//         <button onClick={() => this.getVal()}>Check Ref</button>

//         {/* <User4 count={this.state.count} />
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Click Me
//         </button> */}
//       </div>
//     );
//   }
// }

function App() {
  // const [value, setValue] = useState("000");
  // const [count, setCount] = useState(0);
  // const [item, setItem] = useState(10);

  // const inputRef = useRef(null);
  // const inputRef2 = useRef(null);

  // function submitForm(e) {
  //   e.preventDefault();
  //   console.warn("field 1 value: ", inputRef.current.value);
  //   console.warn("field 2 value: ", inputRef2.current.value);
  //   let input3 = document.getElementById("input3").value;
  //   console.warn("field 3 value: ", input3);
  // }

  // function handleInput() {
  //   inputRef.current.value = 1000;
  //   inputRef.current.focus();
  // }

  // function updateInput() {
  //   inputRef.current.value = 1000;
  //   inputRef.current.focus();
  //   inputRef.current.style.color = 'red';
  // }

  // const multiCount = useMemo(function multiCount() {
  //   return count*5
  // }, [count]);

  // function parentAlert(data){
  //     alert(data.email);
  // }

  return (
    <div className="App">
      <h1>HOC</h1>
      {/* <Counter /> */}
      <HOCGreen cmp={Counter} />
      <HOCRed cmp={Counter} />

      {/* <h1>Uncontrolled Component</h1>

      <form onSubmit={submitForm}>
        <input ref={inputRef} type="text" /> <br />
        <input ref={inputRef2} type="text" /> <br />
        <input id="input3" type="text" />
        <button>Submit</button>
      </form> */}

      {/* <h1>Controlled Components</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      /> */}

      {/* <h1>forwardRef</h1>

      <User5 ref={inputRef}/>
      <button onClick={updateInput}>Update Inputbox</button> */}

      {/* <h1>useRef in React</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleInput}>Click Me</button> */}

      {/* <h1>useMemo hook</h1>

      <h2>Count: {count}</h2> <br />
      <h2>Item: {item}</h2>
      <h2>{multiCount}</h2>

      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setItem(item * 10)}>Update Item</button> */}

      {/* <h1>Lifting State Up</h1>
        <User3 alert={parentAlert}/> */}
      {/* <h1>React Fragment</h1>
      <table>
        <tbody>
          <tr>
            <Cols />
          </tr>
        </tbody>
      </table> */}
    </div>
  );

  // ------------------------------------------------------------------------------------------------

  // Reuse Componenet

  //   const students = [
  //     { name: "Shubham", email: "shubham@gmail.com", contact: 111 },
  //     { name: "peter", email: "peter@gmail.com", contact: 111 },
  //     { name: "bill", email: "bill@gmail.com", contact: 333 },
  //   ];

  //   return(
  //     <div className="App">
  //         <h1>Reuse Component with List</h1>
  //         {
  //             students.map((item, i) =>
  //                 <Student2  data={item} />
  //             )
  //         }

  //     </div>
  //   )

  // ------------------------------------------------------------------------------------------------

  // nested linked list of students

  //   const students = [
  //     {
  //       name: "Shubham",
  //       email: "shubham@gmail.com",
  //       address: [
  //         { Hn: 10, city: "rajkot", country: "India" },
  //         { Hn: 11, city: "pune", country: "India" },
  //         { Hn: 12, city: "mumbai", country: "India" },
  //       ],
  //       //   contact: 8888,
  //     },
  //     {
  //       name: "Peter",
  //       email: "peter@gmail.com",
  //       address: [
  //         { Hn: 10, city: "rajkot", country: "India" },
  //         { Hn: 11, city: "pune", country: "India" },
  //         { Hn: 12, city: "mumbai", country: "India" },
  //       ],
  //       //   contact: 1111,
  //     },
  //     {
  //       name: "Bill",
  //       email: "bill@gmail.com",
  //       address: [
  //         { Hn: 10, city: "rajkot", country: "India" },
  //         { Hn: 11, city: "pune", country: "India" },
  //         { Hn: 12, city: "mumbai", country: "India" },
  //       ],
  //       // contact: 1111,
  //     },
  //   ];

  //   return (
  //     <div className="App">
  //       {/* <h1>Handle Array with List</h1> */}
  //       <h1>List With Bootstrap</h1>

  //       <Table striped variant="dark">
  //         <tbody>
  //           <tr>
  //             <td>Sr. No</td>
  //             <td>Name</td>
  //             <td>Email</td>
  //             <td>Address</td>
  //             {/* <td>Contact</td> */}
  //           </tr>
  //           {students.map((data, i) => (
  //             // data.contact === 1111 ?
  //             <tr key={i}>
  //               <td>{i+1}</td>
  //               <td>{data.name}</td>
  //               <td>{data.email}</td>
  //               <td>
  //                 {data.address.map((item) => (
  //                   <Table striped variant="dark">
  //                     <tbody>
  //                       <tr>
  //                         <td>{item.Hn}</td>
  //                         <td>{item.city}</td>
  //                         <td>{item.country}</td>
  //                       </tr>
  //                     </tbody>
  //                   </Table>
  //                 ))}
  //               </td>
  //             </tr>
  //             // : null
  //           ))}
  //         </tbody>
  //       </Table>
  //     </div>
  //   );
}

function HOCGreen(props) {
  return (
    <div>
      <h2 style={{ backgroundColor: "green" }}>
        <props.cmp />
      </h2>
    </div>
  );
}

function HOCRed(props) {
  return (
    <div>
      <h2 style={{ backgroundColor: "red" }}>
        <props.cmp />
      </h2>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>Update Me</button>
    </div>
  );
}

export default App;
