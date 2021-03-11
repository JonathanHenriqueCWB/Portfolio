import React from 'react'
import './Jobs.css'

const Jobs = () => (
    <section className='Jobs'>

        <h2>Veja meu útimos trabalhos</h2>
        <p>Aqui estão meus ultimos trabalhos <a href="/">clique aqui</a></p>

        <div className='Img-flex-container '>
            <div className='ImgBox' id='Img1'></div>
            <div className='ImgBox' id='Img2'></div>
            <div className='ImgBox' id='Img3'></div>
            <div className='ImgBox' id='Img4'></div>
        </div>

        <div className='Img-flex-container '>
            <div className='ImgBox' id='Img5'></div>
            <div className='ImgBox' id='Img6'></div>
            <div className='ImgBox' id='Img7'></div>
            <div className='ImgBox' id='Img8'></div>
        </div>

    </section>
)

export default Jobs