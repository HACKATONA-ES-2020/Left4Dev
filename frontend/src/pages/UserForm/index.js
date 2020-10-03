import React from 'react';

import { Container, TextField} from '@material-ui/core';

import PageHeader from '../../components/PageHeader';
import Background from '../../components/Background';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
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

  // const textMaskCustom = (props) => {
  //   const { inputRef, ...other } = props;
  
  //   return (
  //     <MaskedInput
  //       {...other}
  //       ref={(ref) => {
  //         inputRef(ref ? ref.inputElement : null);
  //       }}
  //       mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
  //       placeholderChar={'\u2000'}
  //       showMask
  //     />
  //   );
  // }
  
  return (
    <React.Fragment>
      <PageHeader />
      {/* <Container className="container-form"> */}
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
              {/* <form action="">
                  <fieldset>
                    <label>
                      Nome de Usuário / Apelido
                      <input type="text" name="name" />
                    </label>
                  </fieldset>

                    <fieldset>
                      <label>
                        Senha
                        <input type="password" name="password" />
                      </label>
                    </fieldset>

                    <fieldset>
                      <label htmlFor="">
                        <input type="radio"  name="emoji" value="0" />
                        Sad
                      </label>

                      <label htmlFor="">
                        <input type="radio"  name="emoji" value="0" />
                        Indifferent
                      </label>

                      <label htmlFor="">
                        <input type="radio"  name="emoji" value="0" />
                        Happy
                      </label>
                    </fieldset>

                    <fieldset>
                      <label for="phone">
                      Whatsapp
                        <input type="tel" id="phone" name="phone" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" />
                      </label>
                    </fieldset>
                  
                  <fieldset>
                    <label>
                      Carta de Apresentação
                      <textarea>
                        Texto
                      </textarea>
                    </label>
                  </fieldset>

                <footer>
                  <button type="submit">
                    Salvar
                  </button>
                </footer>

              </form> */}
          </main>
        </Background>
      </div>
      {/* </Container> */}
    </React.Fragment>
  );
}

export default UserForm;