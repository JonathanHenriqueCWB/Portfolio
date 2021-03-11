import React from 'react'
import './Skills.css'
import Wwapon1 from '../../img/weapon1.png'
import Wwapon2 from '../../img/weapon2.png'
import Wwapon3 from '../../img/weapon3.png'

const Skills = () => (
    <section className='Skills'>
        <div className='Container'>
            <div className='Card'>
                <img src={Wwapon1} alt="Weapons" />
                <h3>Desenvolvimento</h3>
                <p>
                    Minha maior paixão é desenvolver
                    projetos web
                </p>
                <h3>Minhas skills</h3>
                <p>HTML, CSS, JS, React, Node...</p>
                <h3>Projetos:</h3>
                <p>
                    E-commerces, Sites institucionais,
                    sistemas web de varias complexidade
                </p>
            </div>

            <div className='Card'>
                <img src={Wwapon2} alt="Weapons" />
                <h3>Criação</h3>
                <p>
                    Atuo também com análise e gerenciamento
                    de projetos
                </p>
                <h3>Meus Conhecimentos</h3>
                <p>
                    Ánalise de software, Engenharia de requisitos,
                    e Análise de Infra
                </p>
            </div>

            <div className='Card'>
                <img src={Wwapon3} alt="Weapons" />
                <h3>Infraestrutura</h3>
                <p>
                    Posso atuar com servidores
                </p>
                <h3>Serviços de Cloud:</h3>
                <p>AWS, Google Cloud, Microsoft Azure</p>
                <h3>O que posso fazer:</h3>
                <p>
                    Clusters, servidores de CDNs,
                    diminuir o tempo de requisição
                </p>
            </div>
        </div>        
    </section>    
)

export default Skills