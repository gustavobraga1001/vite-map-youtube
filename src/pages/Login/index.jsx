import React from 'react'
import Logo from '../../components/Logo'
import Form from '../../components/Form'
import './index.css'

const Login = () => {
  return (
    <div className='container-login'>
        <Logo />
        <div className='titulo'>
            <h1>Acessar</h1>
            <p>Acesse sua a conta usando seu E-mail e Senha ou cadastre-se.</p>
        </div>
        <Form />
    </div>
  )
}

export default Login