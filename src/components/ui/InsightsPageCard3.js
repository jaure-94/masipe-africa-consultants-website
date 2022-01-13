import React from 'react';

import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(theme => ({
  card: {
    padding:'0.5em',
    // width: '100%',
    backgroundColor: '#ebebeb',
    boxShadow: '1px 1px 4px #888888'
  },
  cardTitle: {
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: '1.2rem',
    paddingTop: '0.3em',
    color: theme.palette.primary.main,
    textAlign: 'left'
  },
  cardImage: {
    height: '15em',
    width: '100%',
    display: 'block',
    boxShadow: '1px 1px 4px #888888',
    [theme.breakpoints.down('xs')]: {
      height: '10em'
    }
  },
  cardText: {
    fontFamily: 'Open Sans',
    fontWeight: 400,
    fontSize: '0.75rem',
    marginTop: '0em',
    marginBottom: '0em',
    textAlign: 'left'
  },
  cardAction: {
    margin: '0 0.5em 0.5em 0.5em',
    width: '90%'
  }
}));

const InsightsPageCard3 = props => {
  const { image, title, text } = props;

  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <React.Fragment>
      <div className={classes.card}>
        <Grid container direction='column'>
          <Grid item>
            <div className={classes.imgContainer}>
              <div
                className={classes.cardImage}
                style={{
                  backgroundImage: `url(${image})`
                }}
              />
            </div>
          </Grid>
          <Grid item>
            <Grid container direction='column' spacing={matchesSm ? 2 : 3} alignItems='flex-start' className={classes.cardAction}>
              <Grid item>
                <div className={classes.cardTitle}>
                  {title}
                </div>
              </Grid>
              <Grid item>
                <div className={classes.cardText}>
                  {text}
                </div>
              </Grid>
              <Grid item>
                <Button variant='contained' color='primary' disableRipple className={classes.button}>
                  Read Article
                  <ArrowForwardIosIcon color='white' />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}

export default InsightsPageCard3;
