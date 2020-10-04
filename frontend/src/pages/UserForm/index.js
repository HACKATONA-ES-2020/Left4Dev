import React from 'react';

import { Container, TextField} from '@material-ui/core';

import PageHeader from '../../components/PageHeader';
import Background from '../../components/Background';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import MaskedInput from 'react-text-mask';
import SentimentDissatisfiedSharpIcon from '@material-ui/icons/SentimentDissatisfiedSharp';
import SentimentSatisfiedSharpIcon from '@material-ui/icons/SentimentSatisfiedSharp';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import './stylesUser.css';

function UserForm() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
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
                  {/* <SentimentDissatisfiedSharpIcon id="sad" className="field" fontSize="large" value={handleChange('emotion')}/> */}
                  {/* <SentimentDissatisfiedIcon id="neutral" className="field" fontSize="large" value={handleChange('emotion')}/> */}
                  {/* <SentimentSatisfiedSharpIcon id="smile" className="field" fontSize="large" value={handleChange('emotion')}/> */}
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
                  rows={20}
                  onChange={handleChange('presentation')}
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