// Code DelayedButton Component Here
import React, {Component} from "react";

export default  class DelayedButton extends Component {
    delayTime = () => {
        setTimeout(() => {
            this.props.onDelayedClick("I was clicked")
        },this.props.delay)
    }

    render(){
        return (
            <div>
                <button onClick={this.delayTime}>DelayedButton</button>
            </div>
        )
    }
}