import React, { Component } from 'react'
import './Calculator.css'
import Display from '../components/Display'
import Button from '../components/Button'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0,0],
    current: 0
}

export default class Calculator extends Component{

    state = {...initialState}

    constructor(props){
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMemory() {
        this.setState({...initialState})
    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        }else{
            const equals = operation === '='
            const currentOperation = this.state.operation

            const values = [...this.state.values]

            try{                
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            }catch(e){
                values[0] = this.state.values[0]
            }

            values[1] = 0

            this.setState({
                displayValue: values[0],
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: !equals,
                values
            })
        }
    }

    addDigit(n){
        //Validação de 1 ponto no numero, não autoriza 2 pontos
        if(n === '.' && this.state.displayValue.includes('.')){
            return
        }

        // Se o primeiro numero for 0, o usuario n pode digitar 0 várias vezes
        const clearDisplay = this.state.displayValue === '0' 
                            || this.state.clearDisplay
        //Verifica 0 tbm
        const currentValue = clearDisplay ? '' : this.state.displayValue
        //Salva o valor atual do display
        const displayValue = currentValue + n

        //Salva o numero dentro do estado        
        this.setState({displayValue, clearDisplay: false})

        //Salvando no state o valor no numero
        if(n !== '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values] 
            values[i] = newValue
            
            this.setState({values})
            console.log(values)
        }
    }

    render(){
        return(
            <div>
                <h1>Calculator</h1>
                <div className="calculator">
                    <Display value={this.state.displayValue}/>

                    <Button label="AC" click={this.clearMemory} triple/>

                    <Button label="/" click={this.setOperation} operation/>
                    <Button label="7" click={this.addDigit} />
                    <Button label="8" click={this.addDigit} />
                    <Button label="9" click={this.addDigit} />
                    
                    <Button label="*" click={this.setOperation} operation/>
                    <Button label="4" click={this.addDigit} />
                    <Button label="5" click={this.addDigit} />
                    <Button label="6" click={this.addDigit} />
                    
                    <Button label="-" click={this.setOperation} operation/>
                    <Button label="1" click={this.addDigit} />
                    <Button label="2" click={this.addDigit} />
                    <Button label="3" click={this.addDigit} />
                    
                    <Button label="+" click={this.setOperation} operation/>
                    <Button label="0" click={this.addDigit} double />
                    <Button label="." click={this.addDigit} />
                    <Button label="=" click={this.setOperation} operation/>
                </div>
            </div>
        )
    }
}