import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import carro from '../../assets/carros.svg'
import './home.css'
import Footer from "../../components/Footer";
import BemVindo from "../../components/BemVindo";
import Card from "../../components/Card";
import Header from "../../components/Header";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="box-home">
      <Header />
      <main className="conteudo-home">
        <BemVindo />
        <h3>Rotas disponíveis</h3>
        <div className="cards">
        <Card 
          img={carro}
          title={'Van1'}
          local={'Santo André - São Caetano do Sul'}
          preco={'448,00'}
          stars={'4,95'}
        />
        <Card 
          img={carro}
          title={'Van1'}
          local={'Santo André - São Caetano do Sul'}
          preco={'448,00'}
          stars={'4,95'}
        />
        <Card 
          img={carro}
          title={'Van1'}
          local={'Santo André - São Caetano do Sul'}
          preco={'448,00'}
          stars={'4,95'}
        />
        <Card 
          img={carro}
          title={'Van1'}
          local={'Santo André - São Caetano do Sul'}
          preco={'448,00'}
          stars={'4,95'}
        />
        </div>
      </main>

      <Footer 
        home={true}
        presenca={false}
        percurso={false}
        perfil={false}
      />
    </div>
  );
};

export default Home;