import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Grid } from '@material-ui/core';

import watermark from '../../assets/favicon.png';
import cross from '../../assets/cross.svg';

const useStyles = makeStyles(theme => ({
  card: {
    padding:'0.5em',
    maxWidth: 250,
    margin: '0 auto'
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
    position: 'relative',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    boxShadow: '-1px 1px 5px #888888',
    '&:hover': {
      transition: 'all 0.2s ease-out',
      boxShadow: '-4px 4px 5px #888888',
      top: '-5px',
      right: '-3px',
      cursor: 'pointer'
    },
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
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCard: {
    backgroundImage: `url(${watermark})`,
    backgroundPosition: 'right top',
    backgroundSize: '25em',
    backgroundRepeat: 'no-repeat',
    boxShadow: 'inset 0 0 0 2000px rgba(255, 255, 255, 0.8)',
    height: '20em',
    width: '45em',
    backgroundColor: 'white',
    padding: '1em',
    [theme.breakpoints.down('xs')]: {
      backgroundSize: '15em',
      width: '25em',
      height: '18em'
    }
  },
  modalIcon: {
    maxHeight: '6em',
    [theme.breakpoints.down('xs')]: {
      maxHeight: '2em'
    }
  },
  modalHeading: {
    fontFamily: 'Open Sans',
    fontWeight: 600,
    fontSize: '1.1rem',
    color: theme.palette.common.darkGrey,
    textTransform: 'uppercase',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.8rem',
      maxWidth: '15em'
    }
  },
  modalCross: {
    height: '1.5em',
    marginRight: 0,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.common.grey
    },
    [theme.breakpoints.down('xs')]: {
      height: '1em'
    }
  },
  modalText: {
    fontFamily: 'Open Sans',
    fontWeight: 400,
    fontSize: '0.9rem',
    color: 'black',
    [theme.breakpoints.down('xs')]: {
      fontSize: '0.9rem'
    }
  }
}));

const ServicesPageCard = props => {
  const classes = useStyles();
  const { img, title, modalText } = props;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className={classes.card} onClick={handleOpen}>
        <div className={classes.imgContainer}>
          <img
            className={classes.cardImage}
            src={img}
            alt='Service Icon'
          />
        </div>
        <Typography variant='h6' className={classes.cardTitle}>
          {title}
        </Typography>
      </div>
      
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <React.Fragment>
            <Grid
              container
              className={classes.modalCard}
              direction='column'
              spacing={2}>
              <Grid item container direction='row' justify='space-between' >
                <Grid item>
                  <img src={img} alt='Popup Icon' className={classes.modalIcon} />
                </Grid>
                <Grid item>
                  <div className={classes.modalHeading}>{title}</div>
                </Grid>
                <Grid item>
                  <img src={cross} onClick={handleClose} alt='Cancel Icon' className={classes.modalCross} />
                </Grid>
              </Grid>
              <Grid item>
                <div className={classes.modalText}>{modalText}</div>
              </Grid>
            </Grid>
          </React.Fragment>
        </Fade>
      </Modal>
    </React.Fragment>
  )
}

export default ServicesPageCard;
