import React, { Component } from "react";

const Input = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name} style={{ marginLeft: -180 }}>
        {props.label} *
      </label>
      <input
        //   ref={this.username}
        //autoFocus
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        id={props.name}
        type={props.type}
        className="form-control"
      />
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
};

export default Input;
