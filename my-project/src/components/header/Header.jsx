import React from 'react'
import './Header.css'
import Logo from '../../img/shuriken.png'

const Header = () => {

    let texto;

    if (window.screen.availWidth < 600) {
        console.log(window.screen.availWidth)
        texto = ''
    } else {
        texto = 'Jonathan Henrique'
    }


    return (
        <header className='Header'>

            <div>
                <img src={Logo} alt="Naruto is the best" />
                <h2>{ texto }</h2>
            </div>

            <nav>
                <ul>
                    <li><a href="/">Sobre</a></li>
                    <li><a href="/">Projetos</a></li>
                    <li><a href="/">Contatos</a></li>
                </ul>
            </nav>

        </header>
    )
}

export default Header