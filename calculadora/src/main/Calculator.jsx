import React, { Component } from 'react'
import './Calculator.css'
import Button from '../Components/Button'
import Display from '../Components/Display'

export default class Calculator extends Component{
    state = {
        numeroDisplay:'',
        numero1: '',
        numero2: '',
        operacao: ''
    }

    lerBotao = (e) => {
        // console.log('Texto btn: ', e.target.textContent)
        if(e.target.textContent.toLowerCase() == 'c'){
            this.setState({
                numeroDisplay:'',
                numero1: '',
                numero2: '',
                operacao: ''
            })
        }else if(['+','-','/','*'].indexOf(e.target.textContent) != -1){
            this.setState({operacao: e.target.textContent})
            if(this.state.numero1 == '' && this.state.numeroDisplay == '') {
                this.setState({numero1: '0'})
            }else if(this.state.numeroDisplay != ''){
                let ultimoDigito = this.state.numeroDisplay.substr(this.state.numeroDisplay.length-1);
                this.setState({numero1: (['-','+','*','/'].indexOf(ultimoDigito) != -1) ? this.state.numeroDisplay.substr(0,this.state.numeroDisplay.length-1) : this.state.numeroDisplay.substr(0,this.state.numeroDisplay.length),numero2: ''})
            }
        }else if(this.state.operacao == '' && ['+','-','/','*','='].indexOf(e.target.textContent) == -1){         
            this.setState({numero1: this.state.numero1 + e.target.textContent})
        }else if(this.state.numero1 != '' && this.state.operacao != '' && ['+','-','/','*','='].indexOf(e.target.textContent) == -1){            
            this.setState({numero2: this.state.numero2 + e.target.textContent})
        }else if(e.target.textContent == '='){
            if(this.state.numero1 != '' && this.state.numero2 != ''){
                let resultado = ''+eval(this.state.numero1+this.state.operacao+this.state.numero2)
                this.setState({
                    numero1: '',
                    numero2: '',
                    operacao: '',
                    numeroDisplay: resultado
                })
            }
        }

        if(e.target.textContent != '='){           
            this.setState((prevState) => ({
                numeroDisplay: prevState.numero1 + prevState.operacao + prevState.numero2
            }))
        }
    }

    render(){        
        return(
            <React.Fragment>
                <h1>Calculadora</h1>
                <div className="calculator">
                    <Display exibir={this.state.numeroDisplay}/>

                    <Button nomeBtn="C" med="qd4" clickBtn={this.lerBotao} />
                    
                    <Button nomeBtn="7" med="qd1" clickBtn={this.lerBotao} />
                    <Button nomeBtn="8" med="qd1" clickBtn={this.lerBotao} />
                    <Button nomeBtn="9" med="qd1" clickBtn={this.lerBotao} />
                    <Button nomeBtn="-" med="qd1" clickBtn={this.lerBotao} />

                    <Button nomeBtn="4" med="qd1" clickBtn={this.lerBotao} />
                    <Button nomeBtn="6" med="qd1" clickBtn={this.lerBotao} />
                    <Button nomeBtn="5" med="qd1" clickBtn={this.lerBotao} />
                    <Button nomeBtn="+" med="qd1" clickBtn={this.lerBotao} />

                    <Button nomeBtn="1" med="qd1" clickBtn={this.lerBotao}/>
                    <Button nomeBtn="2" med="qd1" clickBtn={this.lerBotao} />
                    <Button nomeBtn="3" med="qd1" clickBtn={this.lerBotao} />
                    <Button nomeBtn="*" med="qd1" clickBtn={this.lerBotao} />

                    <Button nomeBtn="0" med="qd2" clickBtn={this.lerBotao} />
                    <Button nomeBtn="=" med="qd1" clickBtn={this.lerBotao} />
                    <Button nomeBtn="/" med="qd1" clickBtn={this.lerBotao} />
                </div>
            </React.Fragment>
        )
    }
}