import React, { Component } from "react"



export default class CoordinatesButton extends Component {

 fun = e => {
   this.props.onReceiveCoordinates([e.clientX , e.clientY])
 
 }


    render() {
     
      return (
      <button onClick = {this.fun}>
            hay coord
      </button>
      )
    }
  }