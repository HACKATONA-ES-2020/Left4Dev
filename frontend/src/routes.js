import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BuddyForm from './pages/BuddyForm';
import UserForm from './pages/UserForm';
import Login from './pages/Login';
import SelectPerfil from './pages/SelectPerfil';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login}/>
      <Route path="/select-perfil" component={SelectPerfil}/>
      <Route path="/buddy" component={BuddyForm}/>
      <Route path="/user" component={UserForm}/>
    </BrowserRouter>
  )
}

export default Routes;