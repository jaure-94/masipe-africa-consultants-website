import React from 'react';

import { Link } from 'react-router-dom';

import InsightsHomeCard from '../ui/InsightsHomeCard';
import IndustriesCard from '../ui/IndustriesCard';
import ServicesCard from '../ui/ServicesCard';

import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import backgroundImage from '../../assets/hunters-race.jpg';
import blueDash from '../../assets/blue-dash.svg';
import businessStrategy from '../../assets/business-strategy-formation.svg';
import orgChangeDev from '../../assets/org-change-and-dev.svg';
import peformanceTraining from '../../assets/performance-mgmt-training.svg';
import startupCustomer from '../../assets/startup-customer.jpg';
import handPhone from '../../assets/hand-phone.jpg';
import frustratedMan from '../../assets/frustrated-man.jpg';
import cookingOil from '../../assets/cooking-oil.png';
import atmMachine from '../../assets/atm-machine.jpg';
import carFactory from '../../assets/car-factory.jpg';

const useStyles = makeStyles(theme => ({
  landingBlock: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
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
      fontSize: '1.6rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
      textAlign: 'center'
    }
  },
  secondaryTitleText: {
    ...theme.typography.secondaryTitleText,
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem'
    }
  },
  blueDash: {
    height: '0.4em',
    display: 'block',
    margin: '0 auto 0 1.1em',
    [theme.breakpoints.down('md')]: {
      height: '0.3em'
    },
    [theme.breakpoints.down('xs')]: {
      margin: '0 auto 0'
    }
  },
  landingHeading: {
    ...theme.typography.subHeading,
    color: '#fff',
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem'
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
  servicesContainer: {
    padding: '0 0 0 13.5%',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '0 1em 0 13.5%'
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '0 1em 0 13.5%'
    }
  },
  servicesCardContainer: {
    padding: '2em',
    backgroundColor: '#ebebeb',
    // margin: '0 auto',
    // justifyContent: 'justify',
    width: '85.5%',
    [theme.breakpoints.down('xs')]: {
      padding: '1em'
    }
  },
  servicesTextContainer: {
    paddingLeft: '8em'
  },
  paragraph: {
    ...theme.typography.bodyText,
    marginBottom: '1em'
  },
  imgContainer: {
    padding: '2em',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    boxShadow: '1px 1px 5px #888888'
  },
  button: {
    ...theme.typography.button
  },
  buttonContainer: {
    padding: '2em 0 0 0'
  },
  heading: {
    ...theme.typography.heading,
    color: theme.palette.primary.main,
    marginTop: '2em',
    marginBottom: '0.5em'
  },
  subHeading: {
    ...theme.typography.subHeading,
    color: theme.palette.primary.main,
    marginTop: '1em',
    marginBottom: '1em'
  },
  insightsContainer: {
    margin: '0 auto'
  },
  industriesSection: {
    backgroundColor: '#ebebeb',
    padding: '0 10.5em 4em 10.5em',
    [theme.breakpoints.down('md')]: {
      padding: '0 5em 2em 5em',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0 2em 2em 2em'
    }
  },
  industriesContainer: {

  }

}));

const Landing = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down('xs'));

  const text = <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nullam a dignissim magna. Cras tincidunt tempor eros et sagittis.
    Nunc accumsan commodo elit in laoreet. Suspendisse finibus ipsum
    at nisl ultricies, in pharetra est dapibus. Nunc pretium sapien
    dolor, vitae efficitur elit rutrum sit amet. Cras tincidunt tempor
    eros et sagittis.
  </p>

  const smallText = <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Nullam a dignissim magna. Cras tincidunt tempor eros et sagittis.
    Nunc accumsan commodo elit in laoreet. Cras tincidunt tempor eros et sagittis.
    Cras tincidunt tempor eros et sagittis.</p>

  const landingText = <p>
    We recognize our clients' requirement for a sustainable return on investment
    from implementing their business strategy riding on robust organizational
    structures and systems. We work with our clients to assess the current reality,
    identify and adopt new or revised strategies, structures and systems in line
    with the desired goals of our client's organization.
  </p>

  return (
    <React.Fragment>
      <Grid container direction='column'>
        <Grid item className={classes.landingBlock}>
          <Grid container direction='column' className={classes.landingContent} spacing={matchesSm ? 2 : 5}>
            <Grid item>
              <div className={classes.pageTitle}>
                Welcome To Masipe Africa Consultants
                <img src={blueDash} alt='Heading Underline' className={classes.blueDash} />
              </div>
            </Grid>
            <Grid item>
              <div className={classes.secondaryTitleText}>
                Change For Development And Growth
              </div>
            </Grid>
            <Grid item>
              <div className={classes.landingHeading}>
                How Can We Assist Your Business?
              </div>
            </Grid>
            <Grid item>
              <div className={classes.landingText}>
                {landingText}
              </div>
            </Grid>
            <Grid item className={classes.buttonContainer}>
              <Button variant='contained' disableRipple className={classes.button} color='primary' component={Link} to='/services'>
                View Our Services
                <ArrowForwardIosIcon color='white' />
              </Button>
            </Grid>
          </Grid> 
        </Grid>
        <Grid item container className={classes.servicesContainer} direction='column' alignItems='flex-start'>
      
          <Grid item className={classes.heading} lg={4} md={6} sm={8}>
            Who We Are
          </Grid>
          <Grid item lg={8} md={10} sm={12} className={classes.paragraph}>
            {text}
          </Grid>
          <Grid item lg={4} md={6} sm={8}>
            <div className={classes.subHeading}>Our Services</div>
          </Grid>
      
          <Grid item container className={classes.servicesCardContainer}>
            <Grid item container direction='row' justify='space-around' spacing={matchesSm ? 3 : undefined} style={{margin: 0}} width={1}>
              <Grid item>
                <ServicesCard
                  img={businessStrategy}
                  title='Business Strategy Formation'
                />
              </Grid>

              <Grid item>
                <ServicesCard
                  img={orgChangeDev}
                  title='Organizational Change And Development'
                />
              </Grid>

              <Grid item>
                <ServicesCard
                  img={peformanceTraining}
                  title='Performance Management Training'
                />
              </Grid>
            </Grid>
          </Grid>
          
          <Grid item className={classes.buttonContainer}>
            <Button variant='contained' disableRipple className={classes.button} color='primary'>More Services</Button>
          </Grid>
        </Grid>
        

        <Grid item container className={classes.insightsContainer} direction='column' spacing={4} style={{width: '77.3%'}}>
          <Grid item className={classes.heading} lg={4} md={6} sm={8}>
            Insights
          </Grid>

          <Grid item container justify='space-around' spacing={matchesSm ? 3 : 6} direction='row'>
            <Grid item>
              <InsightsHomeCard
                title='Reaching The Ideal Customers For Startups'
                image={startupCustomer}
                text={smallText}
              />
            </Grid>
            <Grid item>
              <InsightsHomeCard
                title='How To Rejuvinate A Struggling Business'
                image={frustratedMan}
                text={smallText}
              />
            </Grid>
            <Grid item>
              <InsightsHomeCard
                title='A Digital Footprint Is Needed In The 21st Century'
                image={handPhone}
                text={smallText}
              />
            </Grid>
          </Grid>

          <Grid item>
            <Button className={classes.button} disableRipple color='primary' variant='contained' style={{marginBottom: '3em'}}>
              View More Insights
            </Button>
          </Grid>
        </Grid>

        <Grid item className={classes.industriesSection}>
          <Grid container direction='column' className={classes.industriesContainer} spacing={2} alignItems='flex-start'>
            <Grid item className={classes.heading} lg={4} md={6} sm={8}>
              Industries
            </Grid>
            <Grid item lg={8} md={10} sm={12} className={classes.paragraph}>
              {smallText}
            </Grid>
            <Grid item>
              <Grid container direction='row' className='industriesCards' spacing={4} justify='space-between'>
                <Grid item>
                  <IndustriesCard
                    title='Consumer and Retail'
                    image={cookingOil}
                    text={smallText}
                  />
                </Grid>
                <Grid item>
                  <IndustriesCard
                    title='Consumer and Retail'
                    image={atmMachine}
                    text={smallText}
                  />
                </Grid>
                <Grid item>
                  <IndustriesCard
                    title='Consumer and Retail'
                    image={carFactory}
                    text={smallText}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Landing;