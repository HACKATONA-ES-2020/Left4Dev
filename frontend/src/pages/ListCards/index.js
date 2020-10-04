import React, { useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import Button from '@material-ui/core/Button';
import api from '../../services/api'

import './styles.css';


const ListCards = () => {
  const [listaUsers, setListaUsers] = React.useState([]);

  const searchUsersValids = async () => {
    const headers = {
      headers: {
          authorization: 'Authorization'
      }
    }
    const response = await api.get('http://localhost:8080/user/avaliable', headers.authorization)
    .catch( error => {
      console.log(error.response.data.message)
    });
    if (response && response.status === 200) {
      console.log(response)
      setListaUsers(response.data);
    }
  }
  searchUsersValids();
  return (
    <div >
        <PageHeader />
        <div className="content">
          <div className="content-card">
            {
              listaUsers.map(e => {
                return (
                  <div className="card">
                    <div className="nome">
                      <span>{e.name}</span>
                    </div>
                    <div className="buttons">
                    <Button variant="contained" size="medium" className="button">
                      Detalhes
                    </Button>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
    </div>
  );
}

export default ListCards;