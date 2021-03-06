import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import lightGreen from "@material-ui/core/colors/lightGreen"
import blue from "@material-ui/core/colors/blue"
import CssBaseline from '@material-ui/core/CssBaseline';

import Home from './Home';
import Register from './Register/Register';
import Baseline from './Baseline/Baseline';

const theme = createMuiTheme({
	palette: {
		primary: lightGreen,
		secondary: blue, 
    background: {
      default: "#282c34"
    }
  }
});

class App extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <div className="App">
              <Switch>
                <Route path="/Register" component={Register} />
                <Route path="/Baseline" component={Baseline} />
                <Route component={Home} />
              </Switch>
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
    );
  }
}

export default App;
