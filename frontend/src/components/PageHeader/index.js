import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const PageHeader = () => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
         <span>Voltar</span>
        </Link>
        <img src="#" alt="Buddy" />
      </div>

      <div className="header-content">
        <strong>BUDDY</strong>
        Apoio em todos os lugares
      </div>
    </header>
  );
}

export default PageHeader;