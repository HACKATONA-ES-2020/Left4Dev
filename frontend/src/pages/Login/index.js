import React from 'react';

import Background from '../../components/Background';
import ButtonDefault from '../../components/ButtonDefult';
import Logo from '../../assets/img/logo.png';

import { Link } from 'react-router-dom';

import { TextField, IconButton, OutlinedInput, InputLabel, InputAdornment, FormControl} from '@material-ui/core';

import { Visibility, VisibilityOff } from '@material-ui/icons';

import './styles.css';


function Login() {
  const [values, setValues] = React.useState({
    username: '',
    password: '',
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

  const login = () => {
    console.log("CHAMA API PRA LOGIN");
  }



  return (
    <React.Fragment>
      <div className="form-container">
        <Background>
          <div className="content-logo">
            <img src={Logo} alt="Buddy" />
          </div>
          <div className="form-input">
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

            <ButtonDefault value="Entrar" size="medium" onCLick={login} />
            
            <span className="text">Não possui login?
              <Link to="/select-perfil">
                <span>Deseja se cadastrar?</span>
              </Link>
            </span>
          </div>
        </Background>
      </div>
    </React.Fragment>
  );
}

export default Login;