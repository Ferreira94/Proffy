import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { CgLogOff } from "react-icons/cg";

import logoImg from "../../assets/images/logo.svg";
import landingImg from "../../assets/images/landing.svg";

import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import './style.css';
import api from "../../services/api";

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data;

      setTotalConnections(total);
    })
  }, []);

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="perfil">
          <div className="perfil-img">
            <img src="https://avatars2.githubusercontent.com/u/62767018?s=400&u=1bb47f590a0ea03a1a8b8acadb876b488fb495ba&v=4" />
            <p>Luciano Ferreira</p>
          </div>
          <div className="logoff">
            <Link to="/">
              <CgLogOff size="2.5rem" />
            </Link>
          </div>
        </div>
        <div className="flex-container">
          <div className="logo-container">
            <img src={logoImg} alt="proffy-logo" />
            <h2>Sua plataforma de<br/> estudos online.</h2>
          </div>

          <img
            src={landingImg}
            alt="Plataforma de estudos"
            className="hero-image"
          />
        </div>
      </div>

      <div className="bem-vindo">
        <div className="text-content">
          <div className="text">
            <p>Seja Bem-vindo.</p>
            <strong>O que deseja fazer?</strong>
          </div>

          <span className="total-connections">
            Total de {totalConnections} conexões<br/> já realizadas <img src={purpleHeartIcon} alt="coração roxo" />
          </span>
        </div>

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="estudar" />
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas" />
            Dar Aulas
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
