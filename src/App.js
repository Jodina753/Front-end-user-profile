import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import SignUp from "./Components/Sign-up";
import Login from "./Components/Log-in";
import Edit from "./Components/Edit";

class App extends Component {
  state = { screen: 0 };

  componentDidMount() {
    const token = localStorage.getItem("token");

    if (token) {
      this.setState({ screen: 2 });
    }
  }

  setScreen = (screen) => {
    this.setState({ screen: screen });
  };

  render() {
    return (
      <>
        {this.state.screen === 0 && <Login setScreen={this.setScreen} />}

        {this.state.screen === 1 && <SignUp setScreen={this.setScreen} />}

        {this.state.screen === 2 && <Dashboard setScreen={this.setScreen} />}

        {this.state.screen === 3 && <Edit setScreen={this.setScreen} />}
      </>
    );
  }
}

export default App;
