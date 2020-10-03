import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import BuddyForm from './pages/BuddyForm';
import UserForm from './pages/UserForm';


function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing}/>
      <Route path="/buddy" component={BuddyForm}/>
      <Route path="/user" component={UserForm}/>
    </BrowserRouter>
  )
}

export default Routes;