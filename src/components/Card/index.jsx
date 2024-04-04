import React from 'react'
import star from '../../assets/star.svg'
import divisoria from '../../assets/Divisoria.svg'
import './card.css'

const Card = ( {img, title, local, preco, stars}) => {
  return (
    <div className='card'>
      <img src={img} alt="" />
      <div className='container-card'>
          <p>{title}</p>
          <div className='card-info'>
              <p>{local}</p>
              <div className='card-star'>
                  <img src={star} alt="" />
                  <p>{stars}</p>
              </div>
          </div>
          <p>R$ {preco} /Mês</p>
        </div>
    </div>
  )
}

export default Card