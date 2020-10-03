import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import './styles.css';

const Background = (props) => {
  return (
    <Card className="card-background">
      <CardContent>
        {props.children}
      </CardContent>
    </Card>
  );
}

export default Background;