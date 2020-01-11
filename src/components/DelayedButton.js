import React, { Component } from "react"



export default class DelayedButton extends Component {

  fun = (event) =>{
    event.persist()
    setTimeout(() => {
      
      this.props.onDelayedClick(event)
    }, this.props.delay);
  }


    render() {
     
      return (
      <button onClick={this.fun}>
          delay
      </button>
      )
    }
  }