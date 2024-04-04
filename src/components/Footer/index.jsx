import React from 'react'
import homeAcionado from '../../assets/icons/homeAcionado.svg'
import percursoAcionado from '../../assets/icons/percursoAcionado.svg'
import { Link } from 'react-router-dom'
import presencaImg from '../../assets/icons/presenca.svg'
import percursoImg from '../../assets/icons/percurso.svg'
import perfilImg from '../../assets/icons/perfil.svg'
import homeImg from '../../assets/icons/home.svg'
import './footer.css'

const Footer = ({home, presenca, percurso, perfil}) => {
  return (
    <footer className='footer'>
        <div>
            <Link to={'/home'}>
                {home ? <img src={homeAcionado} alt="" /> : <img src={homeImg}/>}
                <p>Início</p>
            </Link>
            
        </div>
        <div>
            <Link to={'/presenca'}>
                {presenca ? <img src={presencaImg} alt="" /> : <img src={presencaImg}/>}
                <p>Presença</p>
            </Link>
        </div>
        <div>
            <Link to={'/percurso'}>
                {percurso ? <img src={percursoAcionado} alt="" /> : <img src={percursoImg}/>}
                <p>Percurso</p>
            </Link>
        </div>
        <div>
            <Link to={'/perfil'}>
                {perfil ? <img src={perfilAcionado} alt="" /> : <img src={perfilImg}/>}
                <p>Perfil</p>
            </Link>
        </div>
    </footer>
  )
}

export default Footer