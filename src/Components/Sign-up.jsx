import React, { Component } from "react";
import axios from "axios";

class SignUp extends Component {
  state = {};

  onInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSignUp = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8002/add",
        this.state
      );

      if (response.data.token) {
        this.props.setScreen(1);
      } else {
        console.log(response.data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        <div className=" sign-up main-container">
          <div className="header">
            <h2>Registration</h2>
          </div>

          <div className=" sign-up input-container" onInput={this.onInput}>
            <input type="text" name="email" placeholder="Email"></input>

            <input type="text" name="username" placeholder="Username"></input>

            <input type="text" name="password" placeholder="Password"></input>

            <button onClick={this.onSignUp}>Sign Up!</button>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
