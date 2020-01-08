// Code DelayedButton Component Here
import React, { Component } from 'react';

export class DelayedButton extends Component {
  handleClick = e => {
    e.persist();
    window.setTimeout(() => {
      this.props.onDelayedClick(e)
    },
       this.props.delay) 
  }
  render() {
    return (
      
        <div>
          <button onClick={this.handleClick}>DelayedButton</button>
        </div>

    );
  }
}

export default DelayedButton;
