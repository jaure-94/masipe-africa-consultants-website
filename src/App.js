import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import theme from './components/Theme';
import { ThemeProvider } from '@material-ui/styles';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Header />
          <Switch>
            <Route 
              exact 
              path='/services'
              component={() => <div>Services</div>}
            />
            <Route 
              exact 
              path='/about-us'
              component={() => <div>About Us</div>}
            />
            <Route 
              exact 
              path='/connect-with-us'
              component={() => <div>Connect With Us</div>}
            />
            <Route 
              exact 
              path='/insights'
              component={() => <div>Insights</div>}
            />
          </Switch>
          <Footer />
        </ThemeProvider>
      </Router>
    );
  }
  
}

export default App;
