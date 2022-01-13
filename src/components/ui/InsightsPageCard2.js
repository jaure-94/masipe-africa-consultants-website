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
    paddingTop: '1em',
    color: theme.palette.primary.main,
    textAlign: 'left'
  },
  cardImage: {
    height: '20em',
    width: '95%',
    display: 'block',
    margin: '0 !important',
    boxShadow: '1px 1px 4px #888888',
    [theme.breakpoints.down('md')]: {
      width: '100%'
    },
    [theme.breakpoints.down('xs')]: {
      height: '15em'
    }
  },
  cardText: {
    fontFamily: 'Open Sans',
    fontWeight: 400,
    fontSize: '0.75rem',
    marginTop: '0em',
    marginBottom: '0em',
    textAlign: 'left'
  }
}));

const InsightsPageCard2 = props => {
  const { image, title, text } = props;

  const classes = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSm = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <React.Fragment>
      <div className={classes.card}>
        <Grid container direction={matchesMd ? 'column' : 'row'} justify='flex-start'>
          <Grid item lg={7}>
            <div className={classes.imgContainer}>
              <div
                className={classes.cardImage}
                style={{
                  backgroundImage: `url(${image})`
                }}
              />
            </div>
          </Grid>
          <Grid item lg={5}>
            <Grid container direction='column' spacing={matchesSm ? 2 : 4} alignItems='flex-start'>
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

export default InsightsPageCard2;
