// Code CoordinatesButton Component Here
import React, { Component } from "react";

class CoordinatesButton extends Component {
  handleClick = event => {
    const arr = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(arr);
  };

  render() {
    return (
      <div className="coordinatesButton">
        <button onClick={this.handleClick}></button>
      </div>
    );
  }
}

export default CoordinatesButton;
