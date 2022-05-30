import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import SignUp from "./Components/Sign-up";
import Login from "./Components/Log-in";

class App extends Component {
  state = { screen: 0, };

  componentDidMount() {
    const token = localStorage.getItem("token");

    if (token) {
      this.setState({ screen: 2 });
    }
  }

  setScreen = (screen) => {
    console.log("set screen called");
    this.setState({ screen: screen });
  };

  render() {
    return (
      <>
        {this.state.screen === 0 && <Login setScreen={this.setScreen} />}

        {this.state.screen === 1 && <SignUp setScreen={this.setScreen} />}

        {this.state.screen === 2 && <Dashboard setScreen={this.setScreen} />}
      </>
    );
  }
}

export default App;
