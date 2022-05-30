import React, { Component } from 'react';
import axios from "axios";

class Login extends Component {
    state = { } 

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
            localStorage.setItem("email", this.state.email);
            this.props.setScreen(2);
          } else {
            console.log(response.data.error);
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
        );
    }
}
 
export default Login;