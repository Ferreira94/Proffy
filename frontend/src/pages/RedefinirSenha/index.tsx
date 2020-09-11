/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import logoImg from "../../assets/images/logo.svg";
import Input from '../../components/Input';
import Button from '../../components/Button';

import './style.css';
import { Link } from 'react-router-dom';

function RedefinirSenha() {
  return (
    

    <div id="cadastro" className="container">
      <div id="left" className="background-container">
        <div className="position-text">
          <img src={logoImg}/>
          <h2>Sua plataforma de<br/> estudos online</h2>
        </div>
      </div>

      <div className="login-container">
        <div className="login-flex">
          <h2>Eita, esqueceu<br/> sua senha</h2>
          <p>Não esquenta, vamos dar um jeito nisso!</p>

          <Input 
            name="email" 
            label="" 
            placeholder="E-mail" 
          />

          <Link to="/sucessenha">
            <Button name="Enviar" />
          </Link>
        </div>
      </div>
      <div id="right" className="background-container">
        <div className="position-text">
          <img src={logoImg}/>
          <h2>Sua plataforma de<br/> estudos online</h2>
        </div>
      </div>
    </div>
  );
}

export default RedefinirSenha;



