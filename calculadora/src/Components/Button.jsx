import React, { Component } from 'react'
import './Button.css'

export default props => {
    return(
        <button className={props.med+" buttonCalculator"} onClick={props.clickBtn}>{props.nomeBtn}</button>
    )
}