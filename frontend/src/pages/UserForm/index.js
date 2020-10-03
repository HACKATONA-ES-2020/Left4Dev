import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';

function UserForm() {
  return (
    <div  id="page-user-form" className="container">
      <PageHeader />
      <main>
          informe seus dados
          <form action="">
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

          </form>
      </main>
    </div>
  );
}

export default UserForm;