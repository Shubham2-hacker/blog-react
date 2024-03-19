import React, { PureComponent} from "react";
import "./App.css";

class User4 extends PureComponent {

    render() {
        console.warn("rerendering");
        return(
            <div className="App">
                <h1>User Component {this.props.count}</h1>
                
            </div>
        )
    }
}

export default User4;