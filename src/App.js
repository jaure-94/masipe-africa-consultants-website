import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import theme from './components/Theme';
import { ThemeProvider } from '@material-ui/styles';

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </Router>
    );
  }
  
}

export default App;
