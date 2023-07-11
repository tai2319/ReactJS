import React, { Component } from "react";

class Caculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NumberOne: "123",
      NumberTwo: "123",
    };
  }
  clone = { ...this.state };

  handleChangenumberone = (e) => {
    this.setState = {
      ...this.state,
      NumberOne: e.target.value,
    };
    this.clone = {
      ...this.state,
      NumberOne: e.target.value,
    };
  };
  handleChangenumbertwo = (e) => {
    this.setState = {
      ...this.state,
      NumberTwo: e.target.value,
    };
    this.clone = {
      ...this.state,
      NumberTwo: e.target.value,
    };
  };

  render() {
    return (
      <>
        <label> numbber 1</label>
        <input onChange={this.handleChangenumberone} />
        <label> numbber 1</label>
        <input type="text" onChange={this.handleChangenumberone} />

        <p>{this.clone.NumberOne}</p>
        <p>{this.clone.NumberTwo}</p>
      </>
    );
  }
}
export default Caculator;
