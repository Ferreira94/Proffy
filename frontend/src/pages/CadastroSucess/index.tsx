/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { AiOutlineCheckCircle } from "react-icons/ai";

import Button from '../../components/Button';

import './style.css';
import { Link } from 'react-router-dom';

function CadastroSucess() {
  return (
    <div id="sucess">
      <div className="container">
        <AiOutlineCheckCircle size="5rem" color="04D361" />
        <h2>Cadastro Concluído</h2>
        <p>Agora você faz parte da plataforma da Proffy. 
        <br/>Tenha uma ótima experiência.</p>
        <div className="container-button">
          <Link to="/">
            <Button name="Fazer Login" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CadastroSucess;



