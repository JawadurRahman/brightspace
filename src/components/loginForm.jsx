import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import Form from "./common/form";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label(`Password`),
  };

  render() {
    return (
      <div style={{ marginLeft: "90px", paddingTop: 9 }}>
        <h2
          className="heading"
          style={{
            textAlign: "left",
            fontSize: "1.9rem",
            fontWeight: 400,
            fontFamily: "sans-serif",
          }}
        >
          Welcome to Brightspace at Saint Mary's University
        </h2>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="card" style={{ width: 305 }}>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              {this.renderInput("username", "Username")}
              {this.renderInput("password", "Password", "password")}
              {this.renderButton("Login")}
            </form>
          </div>
        </div>
      </div>
    );
  }

  doSubmit = () => {
    console.log("Loged in");
    //call server other stuff
  };
}

export default LoginForm;
