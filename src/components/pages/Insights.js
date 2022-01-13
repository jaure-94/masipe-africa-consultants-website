import React from 'react';

import { motion } from 'framer-motion';

import InsightsPageCard2 from '../ui/InsightsPageCard2';
import InsightsPageCard3 from '../ui/InsightsPageCard3';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core';

import startupCustomer from '../../assets/startup-customer.jpg';
import insightsLandingBg from '../../assets/insights-landing-bg.jpg';
import blueDash from '../../assets/blue-dash.svg';

const useStyles = makeStyles(theme => ({
  landingBlock: {
    backgroundImage: `url(${insightsLandingBg})`,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.6)',
    width: '100vw',
    height: '75vh'
  },
  landingContent: {
    textAlign: 'center',
    width: '60vw',
    margin: '8% auto 3em auto',
    paddingBottom: '2em',
    [theme.breakpoints.down('md')]: {
      width: '70vw',
      margin: '12% auto 2em 20%',
      marginTop: '12%',
      marginLeft: '15%',
      paddingBottom: '1em'
    },
    [theme.breakpoints.down('xs')]: {
      width: '80vw',
      margin: '25% 10% 1em'
    }
  },
  pageTitle: {
    ...theme.typography.pageTitle,
    marginRight: 'auto',
    textAlign: 'right',
    color: theme.palette.common.white,
    [theme.breakpoints.down('md')]: {
      fontSize: '1.4rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
      textAlign: 'center'
    }
  },
  blueDash: {
    height: '0.4em',
    display: 'block',
    [theme.breakpoints.down('md')]: {
      height: '0.3em'
    },
    [theme.breakpoints.down('xs')]: {
      margin: '0 auto 0'
    }
  },
  secondaryHeaderText: {
    ...theme.typography.secondaryHeaderText,
    color: 'white',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.1rem',
      textAlign: 'left'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem',
      textAlign: 'center'
    }
  },
  landingText: {
    ...theme.typography.bodyText,
    marginRight: 'auto',
    textAlign: 'justify',
    color: theme.palette.common.white,
    [theme.breakpoints.down('md')]: {
      fontSize: '0.8rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7rem'
    }
  },
  servicesHr: {
    width: '97.2%',
    border: `1px solid ${theme.palette.secondary.main}`,
    margin: '1em 0 1em 0.7em',
    [theme.breakpoints.down('md')]: {
      width: '94%'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '1em',
      width: '85%'
    }
  },
  cardContainer: {
    width: '60.5vw',
    margin: '13.5em auto 3em auto',
    [theme.breakpoints.down('md')]: {
      margin: '25em auto 3em auto',
      width: '71vw'
    },
    [theme.breakpoints.down('xs')]: {
      width: '84vw',
      marginTop: '19.5em'
    }
  }
}));

const Insights = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('xs'));

  const welcomeMessage = <p>Welcome to the Masipe Africa Insights collection.
    This is a collection of articles on our opinion around topics affecting
    local business and the economy.
  </p>

  const smallText = <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nullam a dignissim magna. Cras tincidunt tempor eros et sagittis.
    Nunc accumsan commodo elit in laoreet. Cras tincidunt tempor eros et sagittis.
    Cras tincidunt tempor eros et sagittis.</div>

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <React.Fragment>
        <Grid container direction='column'>
          <Grid item className={classes.landingBlock}>
            <Grid container className={classes.landingContent} spacing={matchesSm ? 2 : 3} justify={matchesSm ? 'center' : 'flex-start'}>
              <Grid item>
                <div className={classes.pageTitle}>
                  Insights
                  <img src={blueDash} alt='Heading Underline' className={classes.blueDash} />
                </div>
              </Grid>
              <Grid item>
                <div className={classes.secondaryHeaderText}>
                  {welcomeMessage}
                </div>
              </Grid>
              <Grid item>
                <InsightsPageCard2
                  title='Reaching The Ideal Customers For Startups'
                  image={startupCustomer}
                  text={smallText}
                />
              </Grid>
              <hr className={classes.servicesHr} />
            </Grid>
          </Grid>
          <Grid item container direction='column' className={classes.cardContainer} spacing={matchesSm ? 3 : 4}>
            <Grid item container className={classes.cardSecondaryContainer} direction={matchesSm ? 'column' : 'row'} spacing={matchesSm ? 2 : 3}>
              <Grid item lg={6}>
                <InsightsPageCard3
                  title='Reaching The Ideal Customers For Startups'
                  image={startupCustomer}
                  text={smallText}
                />
              </Grid>
              <Grid item lg={6}>
                <InsightsPageCard3
                  title='Reaching The Ideal Customers For Startups'
                  image={startupCustomer}
                  text={smallText}
                />
              </Grid>
            </Grid>
            <Grid item container direction='row' spacing={matchesSm ? 2 : 3}>
              <Grid item lg={6}>
                <InsightsPageCard3
                  title='Reaching The Ideal Customers For Startups'
                  image={startupCustomer}
                  text={smallText}
                />
              </Grid>
              <Grid item lg={6}>
                <InsightsPageCard3
                  title='Reaching The Ideal Customers For Startups'
                  image={startupCustomer}
                  text={smallText}
                />
              </Grid>
            </Grid>
            <Grid item container direction='row' spacing={matchesSm ? 2 : 3}>
              <Grid item lg={6}>
                <InsightsPageCard3
                  title='Reaching The Ideal Customers For Startups'
                  image={startupCustomer}
                  text={smallText}
                />
              </Grid>
              <Grid item lg={6}>
                <InsightsPageCard3
                  title='Reaching The Ideal Customers For Startups'
                  image={startupCustomer}
                  text={smallText}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* <div style={{marginTop: '1500px'}}>
          <InsightsPageCard
            title='Reaching The Ideal Customers For Startups'
            image={startupCustomer}
            text={smallText}
          />
        </div> */}
      </React.Fragment>
    </motion.div>
  )
}

export default Insights;