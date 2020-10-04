import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import BuddyForm from './pages/BuddyForm';
import UserForm from './pages/UserForm';
import Login from './pages/Login';


function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login}/>
      <Route path="/buddy" component={BuddyForm}/>
      <Route path="/user" component={UserForm}/>
    </BrowserRouter>
  )
}

export default Routes;