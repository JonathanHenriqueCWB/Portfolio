import React from 'react'
import './Banner.css'
import Ninja from '../../img/ninja.png'

const Banner = () => {

    let texto;

    if (window.screen.availWidth < 600) {
        console.log(window.screen.availWidth)
        texto = 'Seja vem vindo!'
    } else {
        texto = 'Olá, eu sou Jonathan Henrique'
        console.log(window.screen.availWidth)
    }

    return (
        <div className='Banner'>
            <div>
                <h1>{ texto }</h1>
                <img src={Ninja} alt="Perfil Ninja" />
                <p>O ninja da programação</p>
            </div>
        </div>
    )
}

export default Banner