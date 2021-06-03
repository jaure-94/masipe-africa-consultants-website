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
  }
});