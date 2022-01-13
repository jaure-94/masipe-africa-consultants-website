import { createMuiTheme } from '@material-ui/core/styles';

const lightBlue = '#009ade',
      midBlue = '#002e86',
      darkBlue = '#11216a',
      grey = '#979790',
      darkGrey = '#444444';

export default createMuiTheme({
  palette: {
    common: {
      lightBlue: lightBlue,
      midBlue: midBlue,
      darkBlue: darkBlue,
      grey: grey,
      darkGrey: darkGrey
    },
    primary: {
      main: lightBlue
    },
    secondary: {
      main: midBlue
    }
  },
  typography: {
    tab: {
      fontFamily: 'Raleway',
      fontWeight: 700,
      fontSize: '0.9rem',
      color: '#000'
    },
    button: {
      fontSize: '0.9rem',
      fontFamily: 'Poppins',
      fontWeight: 300,
      color: 'white'
    },
    pageTitle: {
      fontFamily: 'Poppins',
      fontWeight: 700,
      fontSize: '2rem',
      textTransform: 'uppercase'
    },
    secondaryTitleText: {
      fontFamily: 'Poppins',
      fontStyle: 'italic',
      fontWeight: 500,
      fontSize: '1.5rem',
      color: lightBlue
    },
    heading: {
      fontFamily: 'Poppins',
      fontWeight: 700,
      fontSize: '2rem',
      textTransform: 'uppercase'
    },
    secondaryHeaderText: {
      fontFamily: 'Poppins',
      fontWeight: 600,
      fontSize: '1.2rem',
      textAlign: 'left'
    },
    subHeading: {
      fontFamily: 'Poppins',
      fontWeight: 700,
      fontSize: '1.5rem',
      textTransform: 'uppercase'
    },
    servicesHeading: {
      fontFamily: 'Open Sans',
      fontWeight: 800,
      fontSize: '1.3rem',
      textTransform: 'uppercase'
    },
    imageText: {
      fontFamily: 'Poppins',
      fontWeight: 700,
      fontSize: '1.5rem',
      color: 'white'
    },
    bodyText: {
      fontFamily: 'Poppins',
      fontWeight: 300,
      fontSize: '0.9rem',
    },
    dialogText: {
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: '1rem',
      color: darkGrey,
      textAlign: 'center'
    },
    footer: {
      fontFamily: 'Raleway',
      fontWeight: 400,
      fontSize: '0.8rem',
      color: '#fff'
    }
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: darkBlue,
        fontFamily: 'Poppins',
        fontWeight: 300,
        fontSize: '0.8rem'
      }
    }
  }
});