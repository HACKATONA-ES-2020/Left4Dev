import React from 'react';
import Logo from '../../assets/img/logo.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import './styles.css';

const PageHeader = () => {
  return (
    <header>
      <div className="header">
        {/* <sapan className="arrow-back"></sapan> */}
        <ArrowBackIcon className="arrow-back" fontSize="large" onClick={() => window.history.back()} />
        <img className="logo" src={Logo} alt="Buddy" />
      </div>
    </header>
  );
}

export default PageHeader;