import React from 'react'
import './Button.css'

const Button = props => {

    let classes = 'Button '
    classes += props.operation ? 'operation ' : ''
    classes += props.double ? 'double ' : ''
    classes += props.triple ? 'triple ' : ''

    return (
            <button className={classes} onClick={() => props.func(props.value)}>{props.value}</button>
    )
}

export default Button

// Componente aplicará o CSS condicional conforme a porp passada pelo Parent Component