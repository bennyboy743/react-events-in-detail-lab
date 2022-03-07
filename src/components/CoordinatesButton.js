// Code CoordinatesButton Component Here
import React, {Component} from "react";

export default  class CoordinatesButton extends Component {
    
    displayCoords = (e) => {
        const mousePos = {
            x: 0,
            y: 0
        }
        mousePos.x = e.clientX
        mousePos.y = e.clientY
        this.props.onReceiveCoordinates(mousePos)
    }

    

    render(){
      return (
            <div>
                <button onClick={this.displayCoords}>Get Mouse Coords</button>
            </div>
        )
    }
}