// Code DelayedButton Component Here
import React, { Component } from "react";

export default class CoordinateButton extends Component {
  passOver = e => {
    this.props.onDelayedClick(e);
  };
  render() {
    return (
      <button
        onClick={e => {
          e.persist();
          setTimeout(() => this.passOver(e), this.props.delay);
        }}
      ></button>
    );
  }
}
