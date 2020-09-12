/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { BiArrowBack } from "react-icons/bi";
import { Link } from 'react-router-dom';

import logoImg from "../../assets/images/logo.svg";
import Input from '../../components/Input';
import Button from '../../components/Button';

import './style.css';

function Cadastro() {
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
          <Link to="/">
            <BiArrowBack size="2.5rem" />
          </Link>
          <h2>Cadastro</h2>
          <p>Preencha os dados abaixo<br/> para começar</p>
          <Input 
            name="nome" 
            label="" 
            placeholder="Nome" 
          />

          <Input 
            name="sobrenome" 
            label="" 
            placeholder="Sobrenome" 
          />

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

          <Link to="/sucess">
            <Button name="Concluir cadastro" />
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

export default Cadastro;



