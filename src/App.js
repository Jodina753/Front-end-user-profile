import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class Login extends Component {
  state = {};

  onInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async () => {
    await axios.get("http://localhost:8002/add");
  };

  render() {
    return (
      <>
        <div className="main-container">
          <div className="header">
            <h2>Welcome Back</h2>
          </div>

          <div className="input-container" onInput={this.onInput}>
            <input type="text" name="email" placeholder="Email"></input>

            <input type="text" name="password" placeholder="Password"></input>

            <button onClick={this.onSubmit}>Sign in</button>
          </div>

          <div className="footer">
            <h4>Forgot password?</h4>
            <span>or</span>
            <h4>Create an account</h4>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
