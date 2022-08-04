import axios from "axios";
import React, { Component } from "react";
import { apiUrl } from "../config";
import {
  FaSignOutAlt,
  FaBars,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaGithub,
} from "react-icons/fa";
import defaultIcon from "../Images/download.png";

//screen: 2 - Dashboard
class Dashboard extends Component {
  state = {};

  componentDidMount() {
    this.getPrivateData();
  }

  getPrivateData = async () => {
    const response = await axios.get(`${apiUrl}/get`, {
      headers: { token: localStorage.getItem("token") },
    });

    this.setState({ userProfile: response.data.payload });
  };

  logOut = async () => {
    axios.delete(`${apiUrl}/logout`, {
      headers: { token: localStorage.getItem("token") },
    });

    localStorage.clear();

    this.props.setScreen(0);
  };

  delete = async () => {
    await axios.delete(`${apiUrl}/delete`, {
      headers: { token: localStorage.getItem("token") },
    });

    localStorage.clear();

    this.props.setScreen(0);
  };

  render() {
    return (
      <>
        <div className="profile-container">
          <nav className="nav-bar">
            <FaBars size={26} id="dash-menu-icon" />
            <FaSignOutAlt
              size={26}
              id="dash-logout-icon"
              onClick={this.logOut}
            />
          </nav>

          <div className="profile-icon-container">
            <img className="profile-icon" src={defaultIcon} alt="profile"></img>
          </div>

          <div className="profile-header">
            <h1>
              Marlo Stanfield <span>Software Developer</span>{" "}
              <span className="span2">
                {" "}
                <FaMapMarkerAlt size={16} /> London, UK
              </span>
            </h1>
          </div>

          <div className="social-icons">
            <FaTwitter size={26} id="twitter" />
            <FaInstagram size={26} id="instagram" />
            <FaGithub size={26} id="github" />
            <FaPinterest size={26} id="pinterest" />
          </div>

          <div className="profile-summary">
            <p>
              Hi, I'm Marlo. I've worked in development for 15 years across
              numerous industries, including fintech, medtech and gaming. I have
              experience with JavaScript, Ruby, Python and C++ and my ultimate
              goal is to innovate and create solutions using elegant code.
            </p>
          </div>

          <div className="footer-btn">
            <button onClick={() => this.props.setScreen(3)}>
              Edit Profile
            </button>
            <button onClick={this.delete}>Delete Profile</button>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
