import React, { Component } from 'react'
import './Button.css'

class Button extends Component{
    render(){
        return(
            <button className={this.props.med+" buttonCalculator"} >{this.props.nomeBtn}</button>
        )
    }
}

export default Button