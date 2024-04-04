import React from 'react'
import van from '../../assets/carros.svg'
import './anuncio.css'

const Anuncio = () => {
  return (
    <div>
        <div>
            <img src={van} >
                {/* <img src="" />
                <img src="" /> */}
            </img>
        </div>
        <h1>Van 1</h1>
        <div>
            <div>
                {/* <img src="" />
                <img src="" />
                <img src="" />
                <img src="" />
                <img src="" /> */}
                <p>4,95</p>
            </div>
            <div>
                <p>154</p>
                <p>Avliações</p>
            </div>
        </div>
        <div>
            <p>Regiões de atendimento:</p>
            <p>Santo André</p>
            <p>São Bernardo do Campo</p>
            <p>São Caetano do Sul</p>
        </div>
        <div>
            <p>Regiões de atendimento:</p>
            <p>Santo André</p>
            <p>São Bernardo do Campo</p>
            <p>São Caetano do Sul</p>
        </div>
        <div>
            <p>06:00</p>
            <p>18:00</p>  
        </div>
        <div>
            <p>Vagas disponiveis:</p>
            <p>06</p>
        </div>
        {/* <Divisoria /> */}

        <div>
            <img src="" alt="" />
            <div>
                <p><span>Motorista: </span> Elias Mendez </p>
                <p>Motorista há 1 mês </p>
            </div>
        </div>
        {/* <Divisoria /> */}

        <h2>Recursos disponiveis no transporte</h2>
        <div>
            {/* <img src="" alt="" /> */}
            <p>Ar condicionado</p>
        </div>
        <div>
            {/* <img src="" alt="" /> */}
            <p>Ar condicionado</p>
        </div>
        <div>
            {/* <img src="" alt="" /> */}
            <p>Ar condicionado</p>
        </div>
        <div>
            {/* <img src="" alt="" /> */}
            <p>Ar condicionado</p>
        </div>
        {/* <Divisoria /> */}
    </div>
  )
}

export default Anuncio