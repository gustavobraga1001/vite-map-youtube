import React from 'react'
import sino from '../../assets/sino.svg'
import mapa from '../../assets/loc.svg'
import pesquisa from '../../assets/pesquisa.svg'
import './header.css'
import Pesquisa from '../Pesquisa/pesquisa'

const Header = () => {
  return (
    <header className='header'>
        <div className="titulo-home">
          <h1>Olá, Usuário</h1>
          <img src={sino} />
        </div>
        <div className="loc-home">
          <p>Localização</p>
          <div className='loc-search'>
            <img src={mapa} alt="" />
            <select name="" id="">
              <option value="Santo Ándre - SP">Santo Ándre - SP</option>
            </select>
          </div>
        </div>
        <Pesquisa 
          img={pesquisa} 
          placeholder={'Para onde?'} 
          type={'text'}
          color={"white"}
        />
      </header>
  )
}

export default Header