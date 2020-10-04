import React from 'react';
import PageHeader from '../../components/PageHeader';
import Button from '@material-ui/core/Button';

import './styles.css';

const ListCards = () => {
  return (
    <div >
        <PageHeader />
        <div className="content">
          <div className="content-card">
            <div className="card">
              <div className="nome">
                <span>descicao</span>
              </div>
              <div className="buttons">
							<Button variant="contained" size="medium" className="button">
                Detalhes
              </Button>
              </div>
            </div>
						<div className="card">
              <div className="nome">
                <span>descicao</span>
              </div>
              <div className="buttons">
							<Button variant="contained" size="medium" className="button">
                Detalhes
              </Button>
              </div>
            </div>
						<div className="card">
              <div className="nome">
                <span>descicao</span>
              </div>
              <div className="buttons">
							<Button variant="contained" size="medium" className="button">
                Detalhes
              </Button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ListCards;