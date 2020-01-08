// Code CoordinatesButton Component Here
import React, { Component} from 'react';

export default class CoordinatesButton extends Component {
    focal = (event) => (
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    )
    render() {
        return ( <div>
            <button onClick={this.focal}>Coords</button>/>
        </div>
            
        )
    }
}