import React from 'react';

import Background from '../../components/Background';
import ButtonDefault from '../../components/ButtonDefult';
import Logo from '../../assets/img/logo.png';
import api from '../../services/api';

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

  const login = async() => {
    console.log("CHAMA API PRA LOGIN");

    
    const headers = {
      headers: {
          authorization: 'Authorization'
      }
    }
    const params = {
      name: values.username,
      password: values.password
    }
    
    const response = await api.get('http://localhost:8080/user/login', { params }, headers.authorization)
    .catch( error => {
      console.log(error.response.data.message)
    });
    if (response && response.status === 200) {
      alert("Login realizado com sucesso!")
      window.location.href = "/";
    }
  }

  return (
    <React.Fragment>
      <div className="container-login">
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
            
          </div>
        </Background>
      </div>
    </React.Fragment>
  );
}

export default Login;