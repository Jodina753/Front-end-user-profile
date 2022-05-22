import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class Login extends Component {
  state = { screen: 1 };

  onInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLogin = async () => {
    await axios.post("http://localhost:8002/login", this.state); //this is to login to existing account
  };

  onSignUp = async () => {
    await axios.post("http://localhost:8002/add", this.state); //this is to create an account
  };

  render() {
    return (
      <>
        <div className="main-container">
          <div className="header">
            <h2>Welcome Back</h2>
          </div>

          <div className="input-container">
            <input type="text" name="email" placeholder="Email"></input>

            <input type="text" name="password" placeholder="Password"></input>

            <button onClick={this.onLogin}>Sign in</button>
          </div>

          <div className="footer">
            <h4>Forgot password?</h4>
            <p>or</p>
            <button
              id="sign-up-btn"
              onClick={() => {
                this.setState({ screen: 0 });
              }}
            >
              <h4>Create an account</h4>
            </button>
          </div>
        </div>

        {this.state.screen === 0 && (
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
        )}
      </>
    );
  }
}

export default Login;
