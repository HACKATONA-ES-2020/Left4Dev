import React from 'react';
import './styles.css';
import { Button, Typography } from '@material-ui/core';
import Background from '../../components/Background';
import Logo from '../../assets/img/logovec.png';
import { Link } from 'react-router-dom';


function SelectPerfil() {
  return (
    <div className="inicial-container">
      <Background>
        <img src={Logo} alt="Buddy" />
        <Typography variant="h1" color="primary" align="center">
          Bem vindo
        </Typography>
        <div className="description">
          <Typography variant="h4" color="primary">
           Este é o espaço para você desabafar com pessoas dispostas a ajudar e interagir, mas primeiro precisamos saber se você quer ser ouvido ou quer ser um buddy.
            <br/>O buddy é com quem você será conectado para conversar, você fala, o buddy escuta!
          </Typography>
        </div>

        <div className="buttons">
          <Link to="/buddy">
            <Button variant="contained" color="primary" size="large">
              Quero ser buddy
            </Button>
          </Link>
          <Link to="/user">
            <Button variant="contained" color="primary" size="large">
              Quero ser ouvido
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outlined" color="secondary">
              Login
            </Button>
          </Link>
        </div>
        <div className="buttons">

          </div>
      </Background>
    </div>
  );
}

export default SelectPerfil;