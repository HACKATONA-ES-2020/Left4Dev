import React from 'react';

import { TextField } from '@material-ui/core';

import PageHeader from '../../components/PageHeader';
import Background from '../../components/Background';

import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import SentimentDissatisfiedSharpIcon from '@material-ui/icons/SentimentDissatisfiedSharp';
import SentimentSatisfiedSharpIcon from '@material-ui/icons/SentimentSatisfiedSharp';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import './styles.css';

function UserForm() {
  const [values, setValues] = React.useState({
    showPassword: false,
    username: '',
    phone: '',
    presentation: '',
    emotion: ''
  });

  const handleChange = (prop) => (event) => {
    console.log(event.target.value)
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickChangeEmotion = (emotion) => {
    setValues({ emotion });
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const cadastrar = () => {
    console.log(values)
  }

  return (
    <React.Fragment>
      <PageHeader />
      <div className="form-container">
        <Background>
          <main>
            <div className="title">
              <span>INFORMAÇÕES PARA CADASTRO</span>
            </div>
            <form className="content" noValidate autoComplete="off">
              <div className="informacoes-basicas">
                <TextField
                  id="username"
                  label="Nome de Usuário / Apelido"
                  variant="outlined"
                  className="field"
                  onChange={handleChange('username')}
                />
                <FormControl className="field" variant="outlined">
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <OutlinedInput
                    id="password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                    labelWidth={70}
                  />
                </FormControl>
                <InputLabel className="field">Escala emocional</InputLabel>
                <FormControl className="icons">
                  <div className="emoji" id="sad" onClick={() => handleClickChangeEmotion(1)}>
                    <SentimentDissatisfiedSharpIcon fontSize="large" />
                  </div>
                  <div className="emoji" id="sad" onClick={() => handleClickChangeEmotion(2)}>
                    <SentimentDissatisfiedIcon id="neutral" fontSize="large" />
                  </div>
                  <div className="emoji" id="sad" onClick={() => handleClickChangeEmotion(3)}>
                    <SentimentSatisfiedSharpIcon id="smile" fontSize="large" />
                  </div>
                </FormControl>
                <TextField
                  id="phone-number"
                  label="Whatsapp"
                  variant="outlined"
                  className="field"
                  onChange={handleChange('phone')}
                />
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  className="field"
                  onChange={handleChange('email')}
                /> 
              </div>
              <div className="carta-apresentacao">
                <TextField
                  id="carta-apresentacao"
                  label="Carta de Apresentação"
                  multiline
                  variant="outlined"
                  className="textarea"
                  rows={10}
                  onChange={handleChange('presentation')}
                />
              </div>
            </form>
            <div className="form-button">
              <Button variant="contained" size="medium" className="button" onClick={cadastrar}>
                CADASTRAR
              </Button>
              <span className="text">Já possui conta?
                <Link to="/select-perfil">
                  <span>Entrar</span>
                </Link>
              </span>
            </div>
          </main>
        </Background>
      </div>
    </React.Fragment>
  );
}

export default UserForm;