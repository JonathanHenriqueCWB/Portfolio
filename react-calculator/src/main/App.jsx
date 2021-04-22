import React from 'react'
import './App.css'

import Button from '../components/Button'
import Display from '../components/Display.'

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

class App extends React.Component {

    state = { ...initialState }

    constructor(props) {
        super(props)
        this.clearMomory = this.clearMomory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDigit = this.addDigit.bind(this)
    }

    clearMomory() {
        console.log('Limpando', this.state)
        this.setState({ ...initialState })
    }

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        } else {
            const equals = operation === '='
            const currentOperation = this.state.operation
            const values = [...this.state.values]
            try{
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
            } catch(e) {
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

    addDigit(n) {
        // Verefica e não deixa o valor . ser setado duas vezes no display
        if (n === '.' && this.state.displayValue.includes('.')) {
            return
        }

        // Limpa o display caso valor setado seja 0, ou quando clearDisplay true
        // Evita o zero a esquerda '-'
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '' : this.state.displayValue
        // Novo valor a ser setado no display
        const displayValue = currentValue + n
        this.setState({ displayValue, clearDisplay: false })

        if (n !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values })
            console.log(values)
        }
    }

    state = { ...initialState }

    render() {
        return (
            <div className='App'>
                <Display value={this.state.displayValue} />

                <Button value='AC' func={this.clearMomory} triple />
                <Button value='/' func={this.setOperation} operation />
                <Button value='7' func={this.addDigit} />
                <Button value='8' func={this.addDigit} />
                <Button value='9' func={this.addDigit} />
                <Button value='*' func={this.setOperation} operation />
                <Button value='4' func={this.addDigit} />
                <Button value='5' func={this.addDigit} />
                <Button value='6' func={this.addDigit} />
                <Button value='-' func={this.setOperation} operation />
                <Button value='1' func={this.addDigit} />
                <Button value='2' func={this.addDigit} />
                <Button value='3' func={this.addDigit} />
                <Button value='+' func={this.setOperation} operation />
                <Button value='0' func={this.addDigit} double />
                <Button value='.' func={this.addDigit} />
                <Button value='=' func={this.setOperation} operation />
            </div>
        )
    }
}

export default App

// Value = Valor que será mostrado como label do btn

// operation, double e triple = indica se esse btn irá ou não receber um propriedade CSS

// ClearMomory = Limpar o display
// SetOperation = Verificar se uma das operações foi digitada (+ - * /)
// addDigit = Adicionar o value do btn precionado ao labe

// PROPRIEDADES INITIALSTATE
// displayValue - Valor que será exibido na calculadora
// clearDisplay - Propriedade para limpar o display
// operation - Armazenará o tipo da operação
// values - Array para primeiro e o segundo valor digitado, o resutado será jogado no primeiro valor
// current - indica em qual valor esta sendo manipulado (values[0] ou values[1])