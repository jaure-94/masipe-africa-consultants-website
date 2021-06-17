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
    paddingBottom: '0.5em'
  },
  footerNavSocial: {
    ...theme.typography.footer,
    textAlign: 'center'
  },
  footerNavHr: {
    width: '75%',
    marginTop: '0.5em',
    marginBottom: '0.5em'
  },
  footerNavTextContainer: {
    ...theme.typography.footer,
    textAlign: 'center'
  },
  footerNavText: {
    ...theme.typography.footer,
    textTransform: 'none',
    marginLeft: '2em',
    marginRight: '2em',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  footerCopyright: {
    backgroundColor: theme.palette.common.darkBlue,
    paddingTop: '0.75em',
    paddingBottom: '0.75em'
  },
  footerCopyrightText: {
    ...theme.typography.footer,
    textAlign: 'center'
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
          Follow us on <LinkedInIcon className={classes.linkedInIcon}/>
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