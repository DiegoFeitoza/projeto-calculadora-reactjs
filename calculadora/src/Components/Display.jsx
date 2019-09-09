import React, { Component } from 'react'
import './Display.css'

export default props => {
    return(
        <div className="display">
            <strong>{(props.exibir == '') ? 0 : props.exibir}</strong>
        </div>
    )
}