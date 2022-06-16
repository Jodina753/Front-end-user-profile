import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  state = {};

  onInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onLogin = async () => {
    console.log("hello");
    try {
      const response = await axios.post(
        "http://localhost:8002/login",
        this.state
      );
      console.log(response);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("email", this.state.email);
        this.props.setScreen(2);
      } else {
        this.setState({ error: response.data.error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="main-container">
        <div className="header">
          <h3>
            Welcome Back!<span>Login to your account.</span>
          </h3>
        </div>

        <div className="input-container" onInput={this.onInput}>
          <label htmlFor="email">E-mail</label>
          <input className="email-input" type="text" name="email"></input>

          <label htmlFor="password">Password</label>
          <input
            className="password-input"
            type="password"
            name="password"
          ></input>
        </div>

        <div className="fgt-password">
          <button
            id="fgt-password-btn"
            onClick={() => {
              this.props.setScreen(3);
            }}
          >
            Forgot password?
          </button>
        </div>

        <button id="sign-in-btn" onClick={this.onLogin}>
          Sign in
        </button>

        {this.state.error && <div>{this.state.error}</div>}

        <div className="footer">
          <p>
            Don't have an account?{" "}
            <span>
              <button
                id="register-btn"
                onClick={() => {
                  this.props.setScreen(1);
                }}
              >
                Sign up
              </button>
            </span>
          </p>
        </div>
      </div>
    );
  }
}

export default Login;
