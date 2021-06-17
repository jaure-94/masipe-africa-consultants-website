import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  footer: {
    width: '100%'
  },
  footerNav: {
    backgroundColor: theme.palette.common.midBlue,
    paddingTop: '0.5em',
    paddingBottom: '0.5em',
    [theme.breakpoints.down('md')]: {
      paddingTop: '0.3em',
      paddingBottom: '0.3em'
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '0.1em',
      paddingBottom: '0.1em'
    }
  },
  footerNavSocial: {
    ...theme.typography.footer,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.65rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.5rem'
    }
  },
  footerNavHr: {
    width: '75%',
    marginTop: '0.5em',
    marginBottom: '0.5em',
    [theme.breakpoints.down('md')]: {
      marginTop: '0.4em',
      marginBottom: '0.4em'
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '0.3em',
      marginBottom: '0.3em'
    }
  },
  footerNavTextContainer: {
    ...theme.typography.footer,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.65rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.5rem'
    }
  },
  footerNavText: {
    ...theme.typography.footer,
    textTransform: 'none',
    marginLeft: '2em',
    marginRight: '2em',
    '&:hover': {
      backgroundColor: 'transparent'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '0.65rem',
      marginLeft: '1.5em',
      marginRight: '1.5em'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.5rem',
      marginLeft: '1em',
      marginRight: '1em'
    }
  },
  footerCopyright: {
    backgroundColor: theme.palette.common.darkBlue,
    paddingTop: '0.75em',
    paddingBottom: '0.75em',
    [theme.breakpoints.down('md')]: {
      paddingTop: '0.65em',
    paddingBottom: '0.65em'
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: '0.5em',
      paddingBottom: '0.5em'
    }
  },
  footerCopyrightText: {
    ...theme.typography.footer,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.65rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.5rem'
    }
  },
  linkedInIcon: {
    color: theme.palette.common.white,
    verticalAlign: 'middle'
  }
}));

const Footer = props => {
const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.footerNav}>
        <div className={classes.footerNavSocial}>
          Follow us on 
          <Button
            component={Link}
            to='#'
            disableRipple>
            <LinkedInIcon className={classes.linkedInIcon}/>
          </Button>
        </div>
        <hr className={classes.footerNavHr} />
        <div className={classes.footerNavTextContainer}>
          <Button
            className={classes.footerNavText}
            component={Link}
            to='#'
            button
            disableRipple>
            Privacy and Legal Info
          </Button>
          <Button
            className={classes.footerNavText}
            component={Link}
            to='/connect-with-us'
            button
            disableRipple>
            Connect With Us
          </Button>
          <Button
            className={classes.footerNavText}
            component={Link}
            to='#'
            button
            disableRipple>
            Attributions
          </Button>
        </div>
      </div>
      <div className={classes.footerCopyright}>
        <div className={classes.footerCopyrightText}>
          &copy; Copyright Masipe Africa, Inc 2021. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer;