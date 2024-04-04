import React from 'react'
import carro from '../../assets/Van.svg'
import './bemVindo.css'

const BemVindo = () => {
  return (
    <div className='bemvindo'>
        <div className='titulo'>
            <h2>Bem vindo!</h2>
            <p>O Vansly é uma plataforma que conecta você ao seu motorista  de transporte escolar.</p>
        </div>
        <img src={carro} alt="" />
    </div>
  )
}

export default BemVindo