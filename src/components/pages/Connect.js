import React, {useState} from 'react';

import { motion } from 'framer-motion';

import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core';
import { Dialog } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { CheckCircleOutline } from '@material-ui/icons';

import handShake from '../../assets/handshake.png';
import blueDash from '../../assets/blue-dash.svg';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundImage: `url(${handShake})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '110vh',
    [theme.breakpoints.down('md')]: {
      height: '57em'
    }
  },
  contentContainer: {
    textAlign: 'center',
    width: '60vw',
    margin: '7% 16em',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      margin: '10% auto 10% 19%',
      width: '65vw'
    },
    [theme.breakpoints.down('xs')]: {
      margin: '20% 0 10% 0',
      width: '90%'
    }
  },
  pageTitle: {
    ...theme.typography.pageTitle,
    color: theme.palette.common.white,
    marginRight: 'auto',
    textAlign: 'left',
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
    [theme.breakpoints.down('xs')]: {
      margin: '0 auto'
    }
  },
  formContainer: {
    width: '15em',
    height: '22em',
    boxShadow: 'inset 0 0 0 2000px rgba(200, 200, 200, 0.6)',
    [theme.breakpoints.down('md')]: {
      order: 2,
      width: '100%',
      height: '23em'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%'
    }
  },
  formGroup: {
    marginTop: '2em'
  },
  cardTextContainer: {
    width: '40em',
    height: '22em',
    backgroundColor: theme.palette.common.white,
    margin: 0,
    padding: '2em',
    [theme.breakpoints.down('md')]: {
      order: 1,
      height: '13em',
      width: '100%',
      padding: '1em'
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      padding: '0.8em',
      height: '15em'
    }
  },
  sendIcon: {
    marginLeft: '0.5em'
  },
  textTitle: {
    fontFamily: 'Poppins',
    fontWeight: 600,
    color: theme.palette.primary.main,
    fontSize: '1.1rem',
    textTransform: 'uppercase',
    marginRight: 'auto',
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      fontSize: '1rem'
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  },
  textBody: {
    fontFamily: 'Poppins',
    fontWeight: 300,
    fontSize: '0.9rem',
    marginRight: 'auto',
    textAlign: 'justify',
    [theme.breakpoints.down('md')]: {
      fontSize: '0.8rem'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.7rem',
      margin: 0
    }
  },
  emailAddress: {
    fontFamily: 'Poppins',
    fontWeight: 600,
    fontSize: '1rem',
    marginRight: 'auto',
    color: theme.palette.common.white,
    textDecoration: 'none',
    textAlign: 'left',
    [theme.breakpoints.down('xs')]: {
      // textAlign: 'center',
      fontSize: '0.9rem'
    }
  },
  button: {
    marginTop: '0.6em'
  },
  dialogHeading: {
    ...theme.typography.secondaryHeaderText,
    color: theme.palette.primary.main,
    margin: 0,
    textTransform: 'uppercase'
  },
  dialogCheck: {
    color: theme.palette.secondary.main,
    marginLeft: '0.5em'
  },
  dialogText: {
    ...theme.typography.dialogText
  },
  dialogButton: {
    margin: '1em 0'
  }
}));

const Connect = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down('md'));
  const matchesSm = useMediaQuery(theme.breakpoints.down('xs'));

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');

  const [message, setMessage] = useState('');

  const [open, setOpen] = useState(false);

  const onChange = event => {
    let valid;

    switch (event.target.id) {
      case 'email':
        setEmail(event.target.value)
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        .test(event.target.value)

        if (!valid) {
          setEmailHelper('Invalid email')
        } else {
          setEmailHelper('')
        }
        break;
      default:
        break;
    }
  }

  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <React.Fragment>
        <Grid container className={classes.container} justify='center'>
          <Grid item container direction='column' alignItems={matchesSm ? 'center' : undefined} className={classes.contentContainer} spacing={3}>
            <Grid item style={{width: '100%'}}>
              <div className={classes.pageTitle}>
                Become Our Client Today
                <img src={blueDash} alt='Heading Underline' className={classes.blueDash} />
              </div>
            </Grid>
            
            <Grid item container direction={matchesMd ? 'column' : 'row'} >
              <Grid item className={classes.formContainer} lg={4}>
                <form className={classes.formGroup} autoComplete="off">
                  <Grid container direction='column' spacing={1}>
                    <Grid item>
                      <TextField
                        id='name'
                        label='Name'
                        variant='filled'
                        value={name}
                        onChange={(event) => setName(event.target.value)}/>
                    </Grid>
                    <Grid item>
                      <TextField
                        id='email'
                        label='Email'
                        variant='filled'
                        value={email}
                        onChange={onChange}
                        helperText={emailHelper}
                        error={emailHelper.length !== 0}/>
                    </Grid>
                    <Grid item>
                      <TextField
                        id='message'
                        label='Message'
                        variant='filled'
                        value={message}
                        multiline
                        rows={4}
                        onChange={(event) => setMessage(event.target.value)}/>
                    </Grid>
                    <Grid item>
                      <Button
                      onClick={() => setOpen(true)}
                        className={classes.button}
                        variant='contained'
                        disableRipple
                        disabled={
                          name.length === 0 ||
                          message.length === 0 ||
                          emailHelper.length !== 0 ||
                          email.length === 0
                        }
                        color='primary'>
                        Send Message
                        <SendIcon color='white' className={classes.sendIcon} />
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>

              <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogContent>
                  <Grid container direction='column' alignItems='center'>
                    <Grid item container direction='row' justify='center'>
                      <Grid item>
                        <p className={classes.dialogHeading}>Message Sent</p>
                      </Grid>
                      <Grid item style={{alignItems: 'center'}}>
                        <CheckCircleOutline className={classes.dialogCheck} />
                      </Grid>
                    </Grid>
                    <Grid item>
                      <p className={classes.dialogText}>Thank you for getting in touch with us! We will respond to your inbox shortly.</p>
                    </Grid>
                    <Grid item>
                      <Button
                      className={classes.dialogButton}
                        onClick={() => setOpen(false)}
                        variant='outlined'
                        color='primary'
                        disableRipple>
                        Cancel
                      </Button>
                    </Grid>
                  </Grid>
                </DialogContent>
              </Dialog>

              <Grid item container className={classes.cardTextContainer} direction='column' spacing={2} lg={8}>
                <Grid item>
                  <div className={classes.textTitle}>Take the first step to a thriving business</div>
                </Grid>
                <Grid item>
                  <div className={classes.textBody}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nullam a dignissim magna. Cras tincidunt tempor eros et sagittis.
                    Nunc accumsan commodo elit in laoreet. Suspendisse finibus ipsum
                    at nisl ultricies, in pharetra est dapibus.
                  </div>
                </Grid>
              </Grid>
            </Grid>
            
            <Grid item container direction='column' spacing={2} className={classes.emailContainer}>
              <Grid item>
                <div className={classes.textTitle}>Email</div>
              </Grid>

              <Grid item container direction='column' spacing={2}>
                <Grid item style={matchesSm ? {textAlign: 'center'} : {textAlign: 'left'}}>
                  <a
                    className={classes.emailAddress}
                    href="mailto:krmadara@gmail.com">
                    KAREN MADARA: krmadara@gmail.com
                  </a>
                </Grid>
                <Grid item style={matchesSm ? {textAlign: 'center'} : {textAlign: 'left'}}>
                  <a
                    className={classes.emailAddress}
                    href="mailto:petermadarasnr@gmail.com">
                    PETER MADARA: petermadarasnr@gmail.com
                  </a>
                </Grid>
              </Grid>
              
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    </motion.div>
  )
}

export default Connect;
