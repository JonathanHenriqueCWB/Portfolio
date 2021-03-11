import React from 'react'
import Ninja from '../../img/ninja.png'
import './Footer.css'

const Footer = () => (
    <footer className='Footer'>
        <h2>Mande uma mensagem</h2>
        <p>
            Caso queira falar sobre algum projeto,
            me contratar ou conversar sobre o anime do
            naruto...
        </p>
        <img src={Ninja} alt="" />
        <form action="" method="">
            <input type="text" name='name' placeholder='Seu nome' />
            <input type='email' name='email' placeholder='Seu email' />
            <textarea name="msg" placeholder='Digite sua mensagem'></textarea>
            <input type='submit' value='Enviar' />
        </form>
        <p>Desenvolvido por <span>Jonathan Henrique - Hora de Codar</span></p>
    </footer>
)

export default Footer