import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Dashboard from "./Dashboard";
import SignUp from "./Sign-up";

class Login extends Component {
  state = { screen: 0 };

  onInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8002/login",
        this.state
      );

      if (response.data.status) {
        localStorage.setItem("token", response.data.token);
        this.setState({ screen: 2 });
      } else {
        console.log(response.data.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  onSignUp = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8002/add",
        this.state
      );

      if (response.data.status) {
        this.setState({ screen: 1 });
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
        <div className="main-container">
          <div className="header">
            <h2>Welcome Back</h2>
          </div>

          <div className="input-container">
            <input type="text" name="email" placeholder="Email"></input>

            <input type="text" name="password" placeholder="Password"></input>

            <button
              onClick={this.setState({
                screen: 0,
                email: " ",
                username: " ",
                password: " ",
              })}
            >
              Sign in
            </button>
          </div>

          <div className="footer">
            <h4>Forgot password?</h4>
            <p>or</p>
            <button
              id="sign-up-btn"
              onClick={() => {
                this.setState({ screen: 1 });
              }}
            >
              <h4>Create an account</h4>
            </button>
          </div>
        </div>

        {this.state.screen === 1 && <SignUp />}

        {this.state.screen === 2 && <Dashboard email={this.state.email} />}
      </>
    );
  }
}

export default Login;
