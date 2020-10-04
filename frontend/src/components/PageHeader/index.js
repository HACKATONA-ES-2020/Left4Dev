import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';

import './styles.css';

const PageHeader = () => {
  return (
    <header>
      <div className="header">
        <Link to="/">
          <span>Voltar</span>
        </Link>
        <img className="logo" src={Logo} alt="Buddy" />
        
      </div>
    </header>
  );
}

export default PageHeader;