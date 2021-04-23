import Joi from "joi-browser";
import React, { Component } from "react";
import { Link } from "react-router-dom";

import Input from "./input";

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    console.log(result);

    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }

    return errors;

    // const errors = {};
    // if (this.state.data.username.trim() === "")
    //   errors.username = "Username is required.";
    // if (this.state.data.password.trim() === "")
    //   errors.password = "Password is required.";
    // return Object.keys(errors).length === 0 ? null : errors;
  };

  validateProperty(input) {
    const obj = { [input.name]: input.value };
    const schema = { [input.name]: this.schema[input.name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
    //if (!error) return null;
    //return error.details[0].message;

    // if (input.name === "username") {
    //   if (input.value.trim() === "") return "username req";
    // }
    // if (input.name === "password") {
    //   if (input.value.trim() === "") return "password req";
    // }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // const username = this.username.current.value;

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  handleChange = (e) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(e.currentTarget);
    if (errorMessage) errors[e.currentTarget.name] = errorMessage;
    else delete errors[e.currentTarget.name];

    const data = { ...this.state.data };
    data[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <Link to="/studentview">
        <button
          style={{ marginLeft: -200 }}
          disabled={!!this.validate()}
          className="btn btn-primary"
        >
          {label}
        </button>
      </Link>
    );
  }

  renderInput(name, label, type = "text") {
    return (
      <Input
        type={type}
        value={this.state.data[name]}
        onChange={this.handleChange}
        name={name}
        label={label}
        error={this.state.errors[name]}
      ></Input>
    );
  }

  // renderSelect(name, label, options) {
  //   const { data, errors } = this.state;

  //   return (
  //     <Select
  //       value={this.state.data[name]}
  //       onChange={this.handleChange}
  //       options={options}
  //       name={name}
  //       label={label}
  //       error={this.state.errors[name]}
  //     ></Select>
  //   );
  // }
}
export default Form;
