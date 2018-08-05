import React, { Component } from 'react';
//Internal Components
import LogIn from '../components/LogIn'
//Material UI
import { MuiThemeProvider, withStyles, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo["800"]
    },
    secondary: pink,
    error: red,

  },
  typography: {
    title: {
      fontSize: 30,
      fontWeight: 400
    }
  }
});

const styles = {
  '@global': {
    body: {
      backgroundColor: indigo["800"]
    }
  }
};

class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <LogIn/>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);

