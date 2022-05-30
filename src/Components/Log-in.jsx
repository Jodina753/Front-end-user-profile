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
          <h2>Welcome Back</h2>
        </div>

        <div className="input-container" onInput={this.onInput}>
          <input type="text" name="email" placeholder="Email"></input>

          <input type="text" name="password" placeholder="Password"></input>

          <button onClick={this.onLogin}>Sign in</button>
        </div>

        {this.state.error && <div>{this.state.error}</div>}

        <div className="footer">
          <h4>Forgot password?</h4>
          <p>or</p>
          <button
            id="sign-up-btn"
            onClick={() => {
              this.props.setScreen(1);
            }}
          >
            <h4>Create an account</h4>
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
