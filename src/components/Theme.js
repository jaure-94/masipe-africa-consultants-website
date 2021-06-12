import { createMuiTheme } from '@material-ui/core/styles';

const lightBlue = '#009ade',
      midBlue = '#002e86',
      darkBlue = '#11216a';

export default createMuiTheme({
  palette: {
    common: {
      lightBlue: `${lightBlue}`,
      midBlue: `${midBlue}`,
      darkBlue: `${darkBlue}`
    },
    primary: {
      main: `${lightBlue}`
    },
    secondary: {
      main: `${midBlue}`
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
      fontFamily: 'Raleway',
      color: 'white'
    }
  }
});