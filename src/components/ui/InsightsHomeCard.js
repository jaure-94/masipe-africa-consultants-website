import React from 'react';

import Flippy, {FrontSide, BackSide} from 'react-flippy';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles(theme => ({
  flipCard: {
    height: '26em',
    minWidth: '19em',
    maxWidth: '19em',
    position: 'relative'
  },
  flipCardFront: {
    // boxShadow: 'inset 0 0 0 2000px rgba(200, 200, 200, 0.6)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center'
    // width: '100%'
  },
  flipCardFrontText: {
    ...theme.typography.imageText,
    position: 'absolute',
    // top: '6em',
    left: '1.5em',
    right: '1.5em',
    textAlign: 'center'
  },
  flipCardBack: {
    backgroundColor: 'rgba(120,0,217,0.15)',
    display: 'flex',
    justifyContent: 'center'
  },
  flipCardBackText: {
    fontFamily: 'Lato',
    fontWeight: 400,
    display: 'block',
    margin: '2em 2em 3em 2em',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: '1.5em'
  },
  button: {
    position: 'absolute',
    bottom: '2em'
  }

}));

const InsightsHomeCard = props => {
  const classes = useStyles();
  const { title, image, text } = props;

  return (
    <React.Fragment>
      <div className={classes.flipCardContainer}>
        <Flippy
          className={classes.flipCard}
          flipOnHover={true}
          flipDirection='horizontal'>
            <FrontSide
              className={classes.flipCardFront}
              style={{
                backgroundImage: `linear-gradient(230deg, rgba(2,0,36,0.8) 0%,  rgba(169,114,187,0.3) 70%), url(${image})`
              }}>
                <div className={classes.flipCardFrontText}>
                  {title}
                </div>
            </FrontSide>
            
            <BackSide
              className={classes.flipCardBack}>
                <div className={classes.flipCardBackText}>
                  {text}
                </div>
                <Button disableRipple color='primary' variant='contained' className={classes.button}>
                    View Article <ArrowForwardIosIcon color='white' />
                </Button>
            </BackSide>
        </Flippy>
      </div>
    </React.Fragment>
  )
}

export default InsightsHomeCard;