import axios from "axios";
import React, { Component } from "react";

//screen: 2 - Dashboard
class Dashboard extends Component {
  componentDidMount() {
    this.getPrivateData();
  }

  getPrivateData = async () => {
    const response = await axios.get(
      `http://localhost:8002/get/${this.props.email}`, {headers: {token: localStorage.getItem("token")}}
    );
  };

  render() {
    return (
      <>
        <div>
          <h1>Weather Dashboard</h1>
        </div>
      </>
    );
  }
}

export default Dashboard;
