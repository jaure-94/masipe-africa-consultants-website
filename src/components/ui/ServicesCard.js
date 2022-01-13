import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    padding:'0.5em',
    maxWidth: 250
  },
  cardTitle: {
    textTransform: 'uppercase',
    marginTop: '1em',
    lineHeight: '1.2em',
    textAlign: 'center',
    fontSize: '1em',
    color: theme.palette.common.darkGrey,
    letterSpacing: 1,
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9em'
    }
  },
  imgContainer: {
    padding: '2em',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    boxShadow: '1px 1px 5px #888888',
    [theme.breakpoints.down('xs')]: {
      padding: '2em 1em'
    }
  },
  cardImage: {
    height: '9em',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#fff',
    [theme.breakpoints.down('xs')]: {
      height: '8em'
    }
  }
}));

const ServicesCard = props => {
  const classes = useStyles();
  const { img, title } = props;

  return (
    <React.Fragment>
      <div className={classes.card}>
        <div className={classes.imgContainer}>
          <img
            className={classes.cardImage}
            src={img}
          />
        </div>
        <Typography variant='h6' className={classes.cardTitle}>
          {title}
        </Typography>
      </div>
    </React.Fragment>
  )
}

export default ServicesCard;
