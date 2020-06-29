import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>
        Class {this.props.Name} a.k.a {this.props.Designation} Component
      </h1>
    );
  }
}

export default Welcome;
