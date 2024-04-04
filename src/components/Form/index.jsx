import React, { useState } from "react";
import Input from '../Input/index'
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import './index.css'

const Form = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email | !senha) {
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if (res) {
      setError(res);
      return;
    }

    navigate("/home"); 
  };
  return (
    <div className="conteudo">
            <Input 
                label={'Digite seu E-mail'}
                type="email"
                placeholder="E-mail"
                onChange={(e) => [setEmail(e.target.value), setError("")]}
            />

            <Input 
                label={'Digite seu senha'}
                type="password"
                placeholder="Senha"
                onChange={(e) => [setSenha(e.target.value), setError("")]}
            />
            <p className="label-error">{error}</p>
            <div className="opcoes">
                <div className="lembrar">
                    <input type="checkbox" id="check-box" className="check" />
                    <label for="check-box">Lembrar senha</label>
                </div>
                <a href="">Esqueci minha senha</a>
            </div>
            <div className="botoes">
              <Link to="/signup" className="link-cadastrar">
                  <p>
                    Cadastrar
                  </p>
              </Link>
              <Button text="Acessar"  classe={'acessar'} onClick={handleLogin}/>
            </div>
        </div>
  );
};

export default Form;