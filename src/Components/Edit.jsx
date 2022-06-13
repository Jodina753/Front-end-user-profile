import React, { Component } from "react";
import { FaArrowLeft, FaPen } from "react-icons/fa";

class Edit extends Component {
  state = {};

  onInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
              <FaArrowLeft size={28} />
            </button>
          </div>

          <div className="header">
            <h3><FaPen size={26} /> Edit Account</h3>
          </div>

          <div className="input-container" onInput={this.onInput}>
            <label for="email">E-mail</label>
            <input type="text" name="email"></input>

            <label for="username">Username</label>
            <input type="text" name="username"></input>

            <label for="password">Password</label>
            <input type="password" name="password"></input>
          </div>

          <button id="sign-up-btn" onClick={this.onS}>
            Save
          </button>

          {this.state.error && <div>{this.state.error}</div>}
        </div>
      </>
    );
  }
}

export default Edit;
