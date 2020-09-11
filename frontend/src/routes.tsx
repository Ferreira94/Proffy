import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import CadastroSucess from './pages/CadastroSucess';
import RedefinirSenha from './pages/RedefinirSenha';
import RedefinirSucess from './pages/RedefinirSucess';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/cadastro" exact component={Cadastro} />
      <Route path="/sucess" exact component={CadastroSucess} />
      <Route path="/redefinirsenha" exact component={RedefinirSenha} />
      <Route path="/sucessenha" exact component={RedefinirSucess} />
      <Route path="/landing" component={Landing} />
      <Route  path="/study" component={TeacherList} />
      <Route  path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  )
}

export default Routes;