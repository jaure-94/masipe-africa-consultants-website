import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';

const useStyles = makeStyles(theme => ({
  card: {
    padding:'0.5em',
    maxWidth: 300,
    backgroundColor: '#fff'
  },
  cardTitle: {
    fontFamily: 'Open Sans',
    fontWeight: 600,
    fontSize: '1.2rem',
    paddingTop: '1em',
    color: theme.palette.primary.main
  },
  cardImage: {
    height: '21em',
    width: '100%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  cardText: {
    fontFamily: 'Open Sans',
    fontWeight: 400,
    fontSize: '0.75rem',
    marginTop: '0em',
    marginBottom: '0em'
  }
}));

const IndustriesCard = props => {
  const classes = useStyles();
  const { image, title, text } = props;

  return (
    <React.Fragment>
      <div className={classes.card}>
        <div className={classes.imgContainer}>
          <motion.div
            whileHover={{scale: 1.1}}
            className={classes.cardImage}
            style={{
              backgroundImage: `url(${image})`
            }}
          />
        </div>
        <div className={classes.cardTitle}>
          {title}
        </div>
        <div className={classes.cardText}>
          {text}
        </div>
      </div>
    </React.Fragment>
  );
}

export default IndustriesCard;