import axios from "axios";
import React, { Component } from "react";

//screen: 2 - Dashboard
class Dashboard extends Component {
  state = {};

  componentDidMount() {
    this.getPrivateData();
  }

  getPrivateData = async () => {
    const response = await axios.get(
      `http://localhost:8002/get/${localStorage.getItem("email")}`,
      { headers: { token: localStorage.getItem("token") } }
    );

    this.setState({ userProfile: response.data.payload });
  };

  logOut = async () => {
    const response = axios.delete(`http://localhost:8002/logout/`, {
      headers: { token: localStorage.getItem("token") },
    });

    localStorage.clear();

    this.props.setScreen(0);
  };

  delete = async () => {
    const response = await axios.delete(
      `http://localhost:8002/delete/${localStorage.getItem("email")}`,
      { headers: { token: localStorage.getItem("token") } }
    );

    localStorage.clear();

    this.props.setScreen(0);
  };

  render() {
    return (
      <>
        <div>
          <nav>
            <button onClick={this.logOut}>Logout</button>
            <button onClick={this.delete}>Delete Account</button>
          </nav>
          <h1>Weather Dashboard</h1>
        </div>
      </>
    );
  }
}

export default Dashboard;
