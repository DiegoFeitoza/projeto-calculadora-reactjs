import React, { Component } from 'react'
import './Calculator.css'
import Button from '../Components/Button'
import Display from '../Components/Display'

export default class Calculator extends Component{
    render(){
        return(
            <React.Fragment>
                <h1>Calculator</h1>
                <div className="calculator">
                    <Display />
                    <Button nomeBtn="9" med="qd1"/>
                    <Button nomeBtn="8" med="qd1"/>
                    <Button nomeBtn="7" med="qd1"/>
                    <Button nomeBtn="-" med="qd1"/>

                    <Button nomeBtn="6" med="qd1"/>
                    <Button nomeBtn="5" med="qd1"/>
                    <Button nomeBtn="4" med="qd1"/>
                    <Button nomeBtn="+" med="qd1"/>

                    <Button nomeBtn="3" med="qd1" />
                    <Button nomeBtn="2" med="qd1" />
                    <Button nomeBtn="1" med="qd1" />
                    <Button nomeBtn="*" med="qd1" />

                    <Button nomeBtn="0" med="qd2" />
                    <Button nomeBtn="=" med="qd1" />
                    <Button nomeBtn="/" med="qd1" />
                </div>
            </React.Fragment>
        )
    }
}