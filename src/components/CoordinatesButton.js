// Code CoordinatesButton Component Here
import React, { Component } from "react";

export default class CoordinateButton extends Component {
  getXY = e => [e.clientX, e.clientY];

  render() {
    return (
      <button
        onClick={e => this.props.onReceiveCoordinates(this.getXY(e))}
      ></button>
    );
  }
}
