import React, { Component } from "react";
import axios from "axios";
import { apiUrl } from "../config";
import { FaArrowLeft, FaPen } from "react-icons/fa";

class Edit extends Component {
  state = {};

  onInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onEdit = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.patch(
        `${apiUrl}/modify`,
        this.state,
        {
          headers: { token },
        }
      );

      if (response.data.status) {
        console.log("data updated");
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
                this.props.setScreen(2);
              }}
            >
              <FaArrowLeft size={28} />
            </button>
          </div>

          <div className="header">
            <h3>
              <FaPen size={26} /> Edit Account
            </h3>
          </div>

          <div className="input-container" onInput={this.onInput}>
            <label htmlFor="email">E-mail</label>
            <input type="text" name="email"></input>

            <label htmlFor="username">Username</label>
            <input type="text" name="username"></input>

            <label htmlFor="password">Password</label>
            <input type="password" name="password"></input>
          </div>

          <button id="sign-up-btn" onClick={this.onEdit}>
            Save
          </button>

          <div className="error-message">
            {this.state.error && <div>{this.state.error}</div>}
          </div>
          
        </div>
      </>
    );
  }
}

export default Edit;
