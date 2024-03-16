import React, { Component } from "react";

class User1 extends Component {
  constructor() {
    super();
    this.state = {
      email: "Chotaliya@email.com",
    };
  }
  render() {
    return (
      <div>
        <h1>{this.state.email}</h1>
        <button onClick={() => this.setState({ email: "shubham@email.com" })}>
          Email
        </button>
      </div>
    );
  }
}

export default User1;
