import React, { Component } from "react";
import logo from "../SMU2colPMS_1.jpg";
import "../App.css";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light ">
        <div className="logo">
          <img src={logo} style={{ width: 176 }} />
        </div>
      </nav>
    );
  }
}

export default NavBar;
