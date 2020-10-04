import React from 'react';

import { TextField } from '@material-ui/core';

import PageHeader from '../../components/PageHeader';
import Background from '../../components/Background';

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
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
                  <SentimentDissatisfiedSharpIcon id="sad" className="field" fontSize="large" />
                  <SentimentDissatisfiedIcon id="neutral" className="field" fontSize="large" />
                  <SentimentSatisfiedSharpIcon id="smile" className="field" fontSize="large" />
                </FormControl>
                <TextField
                  id="phone-number"
                  label="Whatsapp"
                  variant="outlined"
                  className="field"
                />
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  className="field"
                /> 
              </div>
              <div className="carta-apresentacao">
                <TextField
                  id="carta-apresentacao"
                  label="Carta de Apresentação"
                  multiline
                  variant="outlined"
                  className="textarea"
                  rows={20}
                />
              </div>
            </form>
            <div className="form-button">
              <Button variant="contained" size="medium" className="button">
                CADASTRAR
              </Button>
            </div>
            <div className="form-link">
                <p>Já possui conta?</p>
                <a href="/user">Entrar</a>
            </div>
          </main>
        </Background>
      </div>
    </React.Fragment>
  );
}

export default UserForm;