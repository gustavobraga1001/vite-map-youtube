import React from 'react'
import voltar from '../../assets/Return.svg'
import './busca.css'
import Pesquisa from '../../components/Pesquisa/pesquisa'
import map from '../../assets/map.svg'
import PesquisaCard from '../../components/PesquisaCard/pesquisaCard'

const Busca = () => {
  return (
    <>
        <header>
        <div className='busca-titulo'>
            <img src={voltar} />
            <h1>Buscar destinos</h1>
        </div>
        <Pesquisa 
            img={map} 
            placeholder={"Destino"} 
            type={"text"}
            color={'rgba(235, 235, 235, 1)'}
        />
        </header>
        <main>
            <PesquisaCard />
        </main>
        
        <div>

        </div>
    </>
  )
}

export default Busca