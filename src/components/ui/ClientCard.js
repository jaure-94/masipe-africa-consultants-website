import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    padding:'0.5em',
    maxWidth: 200
  },
  cardImg: {
    maxHeight: '5em'
  },
  cardTitle: {
    fontFamily: 'Open Sans',
    fontWeight: 400,
    textTransform: 'uppercase',
    marginTop: '0.5em',
    textAlign: 'center',
    fontSize: '1.1em',
    color: 'white',
    letterSpacing: 1
  },
  imgContainer: {
    padding: '1em',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '20px'
  }
}));

const ClientCard = props => {
  const classes = useStyles();
  const { img, title } = props;

  return (
    <React.Fragment>
      <div className={classes.card}>
        <div className={classes.imgContainer}>
          <img className={classes.cardImg} alt='Client Logo' src={img}/>
        </div>
        <div className={classes.cardTitle}>
          {title}
        </div>
      </div>
    </React.Fragment>
  )
}

export default ClientCard;
