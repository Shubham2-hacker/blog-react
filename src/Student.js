// class Props 
import {Component} from 'react';

export default class Student extends Component {
    render() {
        return(
            <div>
                <h1>Student: {this.props.name}</h1>
                <h1>Email: {this.props.email}</h1>
            </div>
        )
    }
}



// function Props

// function Student(props) {
    
//     return(
//         <div>
//             <h1>Hello: {props.name}</h1>
//             <h2>Email: {props.email}</h2>

//             <h3>Address: {props.other.address}</h3>
//             <h4>Mobile: {props.other.mobile}</h4>
//         </div>
//     )
// }

// export default Student;