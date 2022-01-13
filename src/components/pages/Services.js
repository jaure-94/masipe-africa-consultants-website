import React from 'react';

import { motion } from 'framer-motion';

import ServicesPageCard from '../ui/ServicesPageCard';
import ClientCard from '../ui/ClientCard';

import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core';

import darkLamp from '../../assets/dark-lamp.jpg';
import blueDash from '../../assets/blue-dash.svg';
import businessStrategy from '../../assets/business-strategy-formation.svg';
import orgChangeDev from '../../assets/org-change-and-dev.svg';
import peformanceTraining from '../../assets/performance-mgmt-training.svg';
import corpGovTraining from '../../assets/corporate-governance-training.svg';
import curvedArrow from '../../assets/curved-arrow.svg';
import officeView from '../../assets/office-view.jpg';
import ICSAZ from '../../assets/ICSAZ.png';
import PAAB from '../../assets/paab.jpg';
import SADC from '../../assets/SADC.jpg';

const useStyles = makeStyles(theme => ({
  landingBlock: {
    backgroundImage: `url(${darkLamp})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.6)'
  },
  landingContent: {
    textAlign: 'center',
    width: '60vw',
    margin: '8% auto 3em 20%',
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
    color: theme.palette.common.white,
    [theme.breakpoints.down('md')]: {
      fontSize: '1.4rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
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
  landingHeading: {
    ...theme.typography.servicesHeading,
    color: theme.palette.primary.main,
    marginRight: 'auto',
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
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
  servicesHeading: {
    ...theme.typography.servicesHeading,
    color: theme.palette.secondary.main,
    margin: '2em 2em 0 21%',
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem',
      margin: '2em 13% 1em 13%'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
      margin: '2em 2.5em 1em',
      textAlign: 'center'
    }
  },
  servicesHr: {
    width: '75vw',
    border: `1px solid ${theme.palette.secondary.main}`,
    marginTop: '2em',
    [theme.breakpoints.down('xs')]: {
      marginTop: '1em'
    }
  },
  cardSection: {
    width: '100%',
    padding: '3em 0',
    [theme.breakpoints.down('md')]: {
      paddingBottom: '3em'
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '1em',
      paddingBottom: '1em'
    }
  },
  servicesCardContainer: {
    margin: 0,
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      marginTop: '1em'
    }
  },
  clientsSection: {
    backgroundImage: `url(${officeView})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    margin: 0,
    width: '100%',
    paddingBottom: '2em',
    boxShadow: 'inset 0 0 0 2000px rgba(0, 0, 0, 0.6)'
  },
  clientsHeading: {
    ...theme.typography.servicesHeading,
    color: 'white',
    width: '59%',
    marginTop: '2em',
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
      textAlign: 'center',
      marginTop: '1em'
    }
  },
  clientsText: {
    ...theme.typography.bodyText,
    textAlign: 'justify',
    color: theme.palette.common.white,
    width: '63%',
    // marginLeft: '5%',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.8rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7rem',
      width: '90%'
    }
  },
  clientsTextContainer: {
    width: '100%',
    margin: 0
  },
  clientCardContainer: {
    margin: 0,
    // paddingBottom: '3em',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      marginTop: '1em',
      paddingBottom: '2em'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 0,
      padding: '0 1em !important'
    }
  }
}));

const Services = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSm = useMediaQuery(theme.breakpoints.down('xs'));

  const landingBodyText = <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nullam a dignissim magna. Cras tincidunt tempor eros et sagittis.
    Nunc accumsan commodo elit in laoreet. Suspendisse finibus ipsum
    at nisl ultricies, in pharetra est dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nullam a dignissim magna. Cras tincidunt tempor eros et sagittis.
    Nunc accumsan commodo elit in laoreet. Suspendisse finibus ipsum
    at nisl ultricies, in pharetra est dapibus.
  </p>

  const clientsBodyText = <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nullam a dignissim magna. Cras tincidunt tempor eros et sagittis.
    Nunc accumsan commodo elit in laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nullam a dignissim magna. Cras tincidunt tempor eros et sagittis.
    Nunc accumsan commodo elit in laoreet.
  </p>

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <React.Fragment>
        <Grid container direction='column'>
            <Grid item className={classes.landingBlock}>
              <Grid container direction='column' className={classes.landingContent} spacing={matchesMd ? 2 : 3}>
                <Grid item>
                  <div className={classes.pageTitle}>
                    Who We Are
                    <img src={blueDash} alt='Heading Underline' className={classes.blueDash} />
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.landingText}>
                    {landingBodyText}
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.landingHeading}>What We Stand For</div>
                </Grid>
                <Grid item>
                  <div className={classes.landingText}>
                    {landingBodyText}
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.landingHeading}>
                    Change For Development And Growth
                    <img src={blueDash} alt='Heading Underline' className={classes.blueDash} />
                  </div>
                </Grid>
              </Grid>
            </Grid>

            <Grid item container className={classes.cardSection} direction='column'>
              <Grid item className={classes.servicesHeading}>We can assist your organization in a number of ways</Grid>

              <hr className={classes.servicesHr} />

              <Grid item container direction='column' justify='center' className={classes.servicesCardContainer} spacing={3}>
                <Grid item container direction='row' justify='center' spacing={matchesSm ? 3 : 4} style={{width: '100%', margin: 0}}>
                  <Grid item lg={3}>
                    <ServicesPageCard
                      img={businessStrategy}
                      title='Business Stategy Formation'
                      modalText={clientsBodyText}
                    />
                  </Grid>

                  <Grid item lg={3}>
                    <ServicesPageCard
                      img={orgChangeDev}
                      title='Organizational Change And Development'
                      modalText={clientsBodyText}
                    />
                  </Grid>

                  <Grid item lg={3}>
                    <ServicesPageCard
                      img={peformanceTraining}
                      title='Performance Management Training'
                      modalText={clientsBodyText}
                    />
                  </Grid>
                </Grid>
              
                <Grid item container direction='row' justify='center' spacing={matchesSm ? 3 : 5} style={{width: '100%', margin: 0}}>
                  <Grid item lg={3}>
                    <ServicesPageCard
                      img={curvedArrow}
                      title='Turnaround Strategy Formulation'
                      modalText={clientsBodyText}
                    />
                  </Grid>

                  <Grid item lg={3}>
                    <ServicesPageCard
                      img={corpGovTraining}
                      title='Corporate Governance Training'
                      modalText={clientsBodyText}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item container direction='column' className={classes.clientsSection} justify='center' spacing={4}>
              <Grid item container direction='column' alignItems='center' spacing={3} className={classes.clientsTextContainer} justify='center'>
                <Grid item className={classes.clientsHeading}>
                Notable Clients
              </Grid>
              <Grid item className={classes.clientsText}>
                {clientsBodyText}
              </Grid>
            </Grid>

            <Grid item container direction='row' className={classes.clientCardContainer} spacing={matchesSm ? 2 : 5} justify='center'>
              <Grid item lg={2}>
                <ClientCard
                  img={ICSAZ}
                  title='ICSAZ'
                />
              </Grid>
              <Grid item lg={2}>
                <ClientCard
                  img={PAAB}
                  title='P.A.A.B'
                />
              </Grid>
              <Grid item lg={2}>
                <ClientCard
                  img={SADC}
                  title='SADC DFRC'
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    </motion.div>
  )
}

export default Services;
