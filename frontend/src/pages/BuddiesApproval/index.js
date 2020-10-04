import React from 'react';

import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CheckIcon from '@material-ui/icons/Check';

import PageHeader from '../../components/PageHeader';
import './styles.css';

const BuddiesApproval = () => {
  return (
    <div >
        <PageHeader />
        <div className="content">
          <div className="content-card">
            <div className="card">
              <div className="nome">
                <span>NOME DO FULANO</span>
              </div>
              <div className="buttons">
                <DeleteForeverIcon className="button-icon" />
                <CheckIcon className="button-icon"/>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default BuddiesApproval;