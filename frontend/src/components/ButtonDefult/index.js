import React from 'react';

import { Button } from '@material-ui/core';

import './styles.css';

const ButtonDefault = (props) => {
  return (
    <Button variant="contained" size={props.size} onClick={props.onCLick} className="button-default">
        { props.value }
    </Button>
  );
}

export default ButtonDefault;