import React from 'react';
import axios from 'axios';

import { TextField, Typography } from '@material-ui/core';

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
import './styles.css';
import { Link } from 'react-router-dom';
import api from '../../services/api'

function BuddyForm() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    userName: ''
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {  
    event.preventDefault();
  };

  const onFileChange = event => { 
    setSelectedFile({ selectedFile: event.target.files[0] }); 
  };

  const onFileUpload = () => { 
    const formData = new FormData(); 

    formData.append( 
      "myFile", 
      this.state.selectedFile, 
      this.state.selectedFile.name 
    );
     
    axios.post("api/uploadfile", formData); 
  }; 

  const cadastrar = async () => {
    const headers = {
      headers: {
          authorization: 'Authorization'
      }
    }
    const response = await api.post('http://localhost:8080/buddy', values,
    headers.authorization)
    .catch( error => {
      console.log(error.response.data.message)
    });
    if (response && response.status === 200) {
      alert("Registro salvo com sucesso!")
      window.location.href = "/list-cards";
    }
  }

  return (
    <React.Fragment>
      <PageHeader />
      <div className="form-containerB">
        <Background>
          <main>
            <div className="titleB">
              <Typography variant="h3" color="primary">QUER SER UM BUDDY? ENTÃO INSIRA SEUS DADOS!</Typography>
            </div>
            <form className="contentB" noValidate autoComplete="off">
              <div className="informacoes-basicasB">
                <TextField
                  id="username"
                  label="Nome de Usuário / Apelido"
                  variant="outlined"
                  className="fieldB"
                  onChange={handleChange('username')}
                />
                <FormControl className="fieldB" variant="outlined">
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
              </div>
              <div className="fieldB uploadB"> 
                <input type="file" onChange={onFileChange} /> 
              </div> 
            </form>
            <div className="form-buttonB">
              <Button variant="contained" size="medium" className="buttonB" onClick={cadastrar}>
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

export default BuddyForm;