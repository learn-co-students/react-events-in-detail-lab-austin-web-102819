import React, { Component } from "react";

// Code DelayedButton Component Here
class DelayedButton extends Component {
  handleClick = event => {
    event.persist();
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay);
  };

  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}

export default DelayedButton;
