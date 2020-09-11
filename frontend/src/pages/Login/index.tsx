/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from "../../assets/images/logo.svg";
import Input from '../../components/Input';
import Button from '../../components/Button';

import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import './style.css';

function Login() {
  return (
    <div id="login" className="container">
      <div className="background-container">
        <div className="position-text">
          <img src={logoImg}/>
          <h2>Sua plataforma de<br/> estudos online</h2>
        </div>
      </div>
      <div className="login-container">
        <div className="login-flex">
          <h2>Login</h2>
          <Input 
            name="email" 
            label="" 
            placeholder="E-mail" 
          />

          <Input 
            name="senha" 
            label="" 
            placeholder="Senha" 
          />

          <div className="login-text">
            <div className="lembrar">
              <input type="checkbox"></input>
              <p>Lembrar-me</p>
            </div>
            <Link to="/redefinirsenha">
              <p>Esqueci minha senha</p>
            </Link>
          </div>
          <Link to="/landing">
            <Button name="Entrar" />
          </Link>
          <div className="cadastro">
            <div className="cadastro-flex">
              <p>Não tem conta?</p>
              <Link to="/cadastro">
                <p>Cadastre-se</p>
              </Link>
            </div>
            <p>
              É de graça <img src={purpleHeartIcon} alt="coração roxo" />
            </p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Login;



