import React from 'react'
import img from '../../assets/Return.svg'
import HeaderFixo from '../../components/HeaderFixo/headerFixo'
import './percurso.css'
import MapPage from '../../components/Map/MapPage'
import Footer from '../../components/Footer'

const Percurso = () => {

  return (
    <div className='box-percurso'>
        <HeaderFixo 
            tela='home'
            img={img}
            text='Percurso'
        />
        <div className='map-container-box'>
            <MapPage />
        </div>
        <Footer 
            home={false}
            presenca={false}
            percurso={true}
            perfil={false}
        />
    </div>
  )
}

export default Percurso