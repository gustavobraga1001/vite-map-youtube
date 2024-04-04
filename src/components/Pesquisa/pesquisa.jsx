import React from 'react'
import './pesquisa.css'

const Pesquisa = ({img, placeholder, type, color}) => {
  return (
    <div className="pesquisa" style={{backgroundColor: color}}>
        <img src={img} alt="" />
        <input type={type} placeholder={placeholder}/>
    </div>
  )
}

export default Pesquisa