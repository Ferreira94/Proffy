/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { AiOutlineCheckCircle } from "react-icons/ai";

import Button from '../../components/Button';

import './style.css';
import { Link } from 'react-router-dom';

function RedefinirSucess() {
  return (
    <div id="sucess">
      <div className="container">
        <AiOutlineCheckCircle size="5rem" color="04D361" />
        <h2>Redefinição Enviada!</h2>
        <p>Boa, agora é só checar o e-mail que foi enviado para você,
        <br/>redefinir sua senha e aproveitar os estudos.</p>
        <div className="container-button">
          <Link to="/">
            <Button name="Voltar ao Login" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RedefinirSucess;



