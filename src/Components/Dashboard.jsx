import axios from "axios";
import React, { Component } from "react";
import {
  FaSignOutAlt,
  FaBars,
  FaMapMarkerAlt,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaGithub,
} from "react-icons/fa";
import defaultIcon from "../images/download.png";

//screen: 2 - Dashboard
class Dashboard extends Component {
  state = {};

  componentDidMount() {
    this.getPrivateData();
  }

  getPrivateData = async () => {
    const response = await axios.get(`http://localhost:8002/get`, {
      headers: { token: localStorage.getItem("token") },
    });

    this.setState({ userProfile: response.data.payload });
  };

  logOut = async () => {
    axios.delete(`http://localhost:8002/logout/`, {
      headers: { token: localStorage.getItem("token") },
    });

    localStorage.clear();

    this.props.setScreen(0);
  };

  delete = async () => {
    await axios.delete(
      `http://localhost:8002/delete/`,
      { headers: { token: localStorage.getItem("token") } }
    );

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
            <img
              className="profile-icon"
              src={defaultIcon}
              alt="profile"
            ></img>
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
              incidunt nesciunt magnam officia perferendis! Accusantium earum
              quia ab consequuntur voluptate praesentium incidunt eos obcaecati
              enim fugiat. Minus hic fugit vitae!
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
