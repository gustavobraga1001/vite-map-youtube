import React from 'react'
import './headerFixo.css'
import { Link } from 'react-router-dom'

const HeaderFixo = ({tela, img, text}) => {
  return (
    <header className='header-fixo'>
      <Link to={`/${tela}`}>
        <img src={img} alt="" />
      </Link>
        <p>{text}</p>
    </header>
  )
}

export default HeaderFixo