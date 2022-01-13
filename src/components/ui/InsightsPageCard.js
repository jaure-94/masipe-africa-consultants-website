import React from 'react';

import Flippy, {FrontSide, BackSide} from 'react-flippy';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  flipCard: {
    height: '25em',
    minWidth: '25em',
    maxWidth: '25em',
    position: 'relative'
  },
  flipCardFront: {
    boxShadow: 'inset 0 0 0 2000px rgba(200, 200, 200, 0.6)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    // width: '100%'
  },
  flipCardFrontText: {
    ...theme.typography.imageText,
    position: 'absolute',
    top: '8em',
    left: '1.5em',
    right: '1.5em',
    textAlign: 'center'
  },
  flipCardBack: {
    backgroundColor: '#ebebeb'
  },
  flipCardBackText: {
    fontFamily: 'Open Sans',
    fontWeight: 400,
    display: 'block',
    margin: '2em 2em 3em 2em',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: '1.5em'
  }
}));

const InsightsPageCard = props => {
  const classes = useStyles();
  const { image, title, text } = props;

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
                backgroundImage: `url(${image})`
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
            </BackSide>
        </Flippy>
      </div>
    </React.Fragment>
  )
}

export default InsightsPageCard
