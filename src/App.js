import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import theme from './components/ui/Theme';
import { ThemeProvider } from '@material-ui/styles';
import Landing from './components/pages/Landing';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';
import Insights from './components/pages/Insights';
import Connect from './components/pages/Connect';
import Services from './components/pages/Services';

const App = () => {
  
  const [value, setValue] = useState(0);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header 
          value={value}
          setValue={setValue}
        />
          <Switch>
            <Route
              exact
              path='/'
              component={() => <Landing />}
            />
            <Route 
              exact 
              path='/services'
              component={() => <Services />}
            />
            <Route 
              exact 
              path='/connect-with-us'
              component={() => <Connect />}
            />
            <Route 
              exact 
              path='/insights'
              component={() => <Insights />}
            />
          </Switch>
        <Footer
          value={value}
          setValue={setValue}
        />
      </ThemeProvider>
    </Router>
  );
}
  


export default App;
