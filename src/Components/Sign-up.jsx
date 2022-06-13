import React, { Component } from "react";
import axios from "axios";
import { FaArrowLeft } from "react-icons/fa";

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
        this.setState({ error: response.data.error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <>
        
        <div className="main-container">
          <div className="back-btn-container">
            <button
              id="back-btn"
              onClick={() => {
                this.props.setScreen(0);
              }}
            >
              <FaArrowLeft  size={28} />
            </button>
          </div>

          <div className="header">
            <h3>Create Account</h3>
          </div>

          <div className="input-container" onInput={this.onInput}>
            <label for="email">E-mail</label>
            <input type="text" name="email"></input>

            <label for="username">Username</label>
            <input type="text" name="username"></input>

            <label for="password">Password</label>
            <input type="password" name="password"></input>
          </div>

          <button id="sign-up-btn" onClick={this.onSignUp}>
            Sign Up
          </button>

          {this.state.error && <div>{this.state.error}</div>}

          <div className="footer">
            <p>
              Already have an account?{" "}
              <span>
                <button
                  id="register-btn"
                  onClick={() => {
                    this.props.setScreen(0);
                  }}
                >
                  Sign in
                </button>
              </span>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default SignUp;
